from flask import Flask, render_template, request, redirect, session
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "secret123"

# ================== DATABASE ==================
client_db = MongoClient("mongodb://localhost:27017/")
db = client_db["quiz_app"]

users = db["users"]
results = db["results"]

# ================== SUBJECT LIST ==================
SUBJECTS = [
    "Java",
    "OOSE",
    "Data and File Structure",
    "Information Security",
    "Digital Marketing",
    "Full Stack",
    "Python"
]

# ================== HELPERS ==================
def calculate_subject_stats(username, subject):

    # ===== USER SUBJECT RESULTS =====
    user_results = list(results.find({
        "username": username,
        "subject": subject
    }))

    attempts = len(user_results)

    # ===== PROGRESS =====
    if attempts == 0:
        progress = 0
    else:
        total_score = sum(r["score"] for r in user_results)
        total_questions = sum(r["total"] for r in user_results)

        progress = int((total_score / total_questions) * 100)

    # ===== SUBJECT LEADERBOARD =====
    pipeline = [
        {"$match": {"subject": subject}},
        {
            "$group": {
                "_id": "$username",
                "totalScore": {"$sum": "$score"}
            }
        },
        {"$sort": {"totalScore": -1}}
    ]

    leaderboard_data = list(results.aggregate(pipeline))

    # ===== FIND USER RANK =====
    rank = "-"

    for i, user in enumerate(leaderboard_data):

        if user["_id"] == username:
            rank = i + 1
            break

    # ===== RETURN =====
    return {
        "attempts": attempts,
        "progress": progress,
        "rank": rank
    }


def get_subject_leaderboard(subject):

    pipeline = [
        {"$match": {"subject": subject}},
        {
            "$group": {
                "_id": "$username",
                "totalScore": {"$sum": "$score"}
            }
        },
        {"$sort": {"totalScore": -1}},
        {"$limit": 5}
    ]

    data = list(results.aggregate(pipeline))

    leaderboard = []

    for i, user in enumerate(data):

        leaderboard.append({
            "rank": i + 1,
            "username": user["_id"],
            "score": user["totalScore"]
        })

    return leaderboard
# ================== HOME ==================
@app.route("/")
def home():
    return redirect("/login")

# ================== REGISTER ==================
@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if users.find_one({"username": username}):
            return "User already exists!"

        users.insert_one({
            "username": username,
            "password": password
        })

        return redirect("/login")

    return render_template("register.html")

# ================== LOGIN ==================
@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        user = users.find_one({
            "username": request.form["username"],
            "password": request.form["password"]
        })

        if user:
            session["user"] = user["username"]
            return redirect("/dashboard")

        return "Invalid credentials"

    return render_template("login.html")

# ================== LOGOUT ==================
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/login")

@app.route("/dashboard")
def dashboard():

    if "user" not in session:
        return redirect("/login")

    # ================= USER RESULTS =================
    user_results = list(results.find({
        "username": session["user"]
    }))

    attempts = len(user_results)

    # ================= DASHBOARD PROGRESS =================
    subject_progress_list = []

    for subject in SUBJECTS:

        subject_results = list(results.find({
            "username": session["user"],
            "subject": subject
        }))

        if len(subject_results) > 0:

            total_score_subject = sum(
                r["score"] for r in subject_results
            )

            total_questions_subject = sum(
                r["total"] for r in subject_results
            )

            subject_progress = int(
                (total_score_subject / total_questions_subject) * 100
            )

            subject_progress_list.append(subject_progress)

    # ===== FINAL OVERALL PROGRESS =====
    if len(subject_progress_list) > 0:

        progress = int(
            sum(subject_progress_list) / len(subject_progress_list)
        )

    else:
        progress = 0

    # ================= LEADERBOARD =================
    pipeline = [
        {
            "$group": {
                "_id": "$username",
                "totalScore": {"$sum": "$score"}
            }
        },
        {
            "$sort": {
                "totalScore": -1
            }
        }
    ]

    leaderboard_data = list(results.aggregate(pipeline))

    leaderboard = []

    for i, user in enumerate(leaderboard_data):

        leaderboard.append({
            "rank": i + 1,
            "username": user["_id"],
            "score": user["totalScore"]
        })

    # ================= USER RANK =================
    rank = "-"
    total_score = 0

    for user in leaderboard:

        if user["username"] == session["user"]:

            rank = user["rank"]
            total_score = user["score"]
            break

    # ================= RENDER =================
    return render_template(
        "dashboard.html",
        username=session["user"],
        attempts=attempts,
        progress=progress,
        rank=rank,
        total_score=total_score,
        leaderboard=leaderboard
    )
# ================== SUBJECT PAGE ==================
@app.route("/subject/<subject>")
def subject_page(subject):

    if "user" not in session:
        return redirect("/login")

    stats = calculate_subject_stats(session["user"], subject)

    leaderboard = get_subject_leaderboard(subject)

    return render_template(
        "python.html",
        subject=subject,
        leaderboard=leaderboard,
        **stats
    )

# ================== QUIZ ==================
@app.route("/quiz/<subject>")
def quiz(subject):

    if "user" not in session:
        return redirect("/login")

    return render_template(
        "quiz.html",
        subject=subject
    )

# ================== RESULT ==================
@app.route("/result")
def result():

    if "user" not in session:
        return redirect("/login")

    return render_template("result.html")

# ================== SAVE RESULT ==================
@app.route("/save_result", methods=["POST"])
def save_result():

    data = request.json

    results.insert_one({
        "username": session.get("user"),
        "subject": data["subject"],
        "score": data["score"],
        "total": data["total"]
    })

    return {"status": "success"}

# ================== RUN ==================
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
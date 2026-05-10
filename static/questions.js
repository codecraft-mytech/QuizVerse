const questionBank = {
  "Data Structure": [
    {
      question: "Which data structure follows LIFO?",
      correct_answer: "Stack",
      incorrect_answers: ["Queue", "Tree", "Graph"],
    },
    {
      question: "Which data structure follows FIFO?",
      correct_answer: "Queue",
      incorrect_answers: ["Stack", "Tree", "Linked List"],
    },
    {
      question: "Which data structure stores hierarchical data?",
      correct_answer: "Tree",
      incorrect_answers: ["Array", "Queue", "Stack"],
    },
    {
      question: "Which data structure is used in recursion?",
      correct_answer: "Stack",
      incorrect_answers: ["Queue", "Array", "Tree"],
    },
    {
      question: "Which data structure allows dynamic memory allocation?",
      correct_answer: "Linked List",
      incorrect_answers: ["Array", "Stack", "Queue"],
    },
    {
      question: "Which traversal uses queue?",
      correct_answer: "Breadth First Search",
      incorrect_answers: ["Depth First Search", "Inorder", "Postorder"],
    },
    {
      question: "Which traversal uses stack?",
      correct_answer: "Depth First Search",
      incorrect_answers: [
        "Breadth First Search",
        "Level Order",
        "Binary Search",
      ],
    },
    {
      question: "Which structure is best for searching?",
      correct_answer: "Binary Search Tree",
      incorrect_answers: ["Stack", "Queue", "Array"],
    },
    {
      question: "Which sorting algorithm is fastest on average?",
      correct_answer: "Merge Sort",
      incorrect_answers: ["Bubble Sort", "Selection Sort", "Insertion Sort"],
    },
    {
      question: "Which searching algorithm requires sorted array?",
      correct_answer: "Binary Search",
      incorrect_answers: ["Linear Search", "DFS", "BFS"],
    },
    {
      question: "Which data structure uses nodes?",
      correct_answer: "Linked List",
      incorrect_answers: ["Array", "Stack", "Queue"],
    },
    {
      question: "Which operation inserts element in stack?",
      correct_answer: "Push",
      incorrect_answers: ["Pop", "Insert", "Delete"],
    },
    {
      question: "Which operation removes element from stack?",
      correct_answer: "Pop",
      incorrect_answers: ["Push", "Peek", "Insert"],
    },
    {
      question: "Which operation inserts in queue?",
      correct_answer: "Enqueue",
      incorrect_answers: ["Push", "Pop", "Delete"],
    },
    {
      question: "Which operation removes from queue?",
      correct_answer: "Dequeue",
      incorrect_answers: ["Push", "Peek", "Insert"],
    },
    {
      question: "Which data structure is non-linear?",
      correct_answer: "Tree",
      incorrect_answers: ["Array", "Queue", "Stack"],
    },
    {
      question: "Which data structure stores key-value pairs?",
      correct_answer: "Hash Table",
      incorrect_answers: ["Queue", "Stack", "Array"],
    },
    {
      question: "Which data structure is used in BFS?",
      correct_answer: "Queue",
      incorrect_answers: ["Stack", "Tree", "Array"],
    },
    {
      question: "Which data structure is used in DFS?",
      correct_answer: "Stack",
      incorrect_answers: ["Queue", "Linked List", "Array"],
    },
    {
      question: "Which sorting algorithm compares adjacent elements?",
      correct_answer: "Bubble Sort",
      incorrect_answers: ["Merge Sort", "Quick Sort", "Heap Sort"],
    },
    {
      question: "Which sorting algorithm uses divide and conquer?",
      correct_answer: "Merge Sort",
      incorrect_answers: ["Bubble Sort", "Selection Sort", "Insertion Sort"],
    },
    {
      question: "Which sorting algorithm selects minimum element?",
      correct_answer: "Selection Sort",
      incorrect_answers: ["Bubble Sort", "Quick Sort", "Merge Sort"],
    },
    {
      question: "Which sorting algorithm inserts elements at correct position?",
      correct_answer: "Insertion Sort",
      incorrect_answers: ["Bubble Sort", "Quick Sort", "Heap Sort"],
    },
    {
      question: "Which file organization uses index?",
      correct_answer: "Indexed File",
      incorrect_answers: ["Sequential File", "Heap File", "Text File"],
    },
    {
      question: "Which file organization stores records sequentially?",
      correct_answer: "Sequential File",
      incorrect_answers: ["Indexed File", "Random File", "Heap File"],
    },
    {
      question: "Which tree has maximum two children?",
      correct_answer: "Binary Tree",
      incorrect_answers: ["General Tree", "Heap", "Graph"],
    },
    {
      question: "Which tree is used for priority queue?",
      correct_answer: "Heap",
      incorrect_answers: ["AVL Tree", "Binary Tree", "B Tree"],
    },
    {
      question: "Which graph traversal finds shortest path?",
      correct_answer: "Breadth First Search",
      incorrect_answers: ["Depth First Search", "Preorder", "Postorder"],
    },
    {
      question: "Which data structure allows random access?",
      correct_answer: "Array",
      incorrect_answers: ["Linked List", "Queue", "Stack"],
    },
    {
      question: "Which structure connects nodes with pointers?",
      correct_answer: "Linked List",
      incorrect_answers: ["Array", "Stack", "Queue"],
    },
    {
      question: "Which tree is self-balancing?",
      correct_answer: "AVL Tree",
      incorrect_answers: ["Binary Tree", "Heap", "Graph"],
    },
    {
      question: "Which algorithm finds shortest path in graph?",
      correct_answer: "Dijkstra Algorithm",
      incorrect_answers: ["DFS", "BFS", "Merge Sort"],
    },
    {
      question: "Which notation represents algorithm complexity?",
      correct_answer: "Big O Notation",
      incorrect_answers: ["Binary Notation", "Hexadecimal", "ASCII"],
    },
    {
      question: "Which complexity is fastest?",
      correct_answer: "O(1)",
      incorrect_answers: ["O(n)", "O(n²)", "O(log n)"],
    },
    {
      question: "Which complexity belongs to binary search?",
      correct_answer: "O(log n)",
      incorrect_answers: ["O(n)", "O(n²)", "O(1)"],
    },
    {
      question: "Which complexity belongs to linear search?",
      correct_answer: "O(n)",
      incorrect_answers: ["O(log n)", "O(1)", "O(n²)"],
    },
    {
      question: "Which data structure uses hashing?",
      correct_answer: "Hash Table",
      incorrect_answers: ["Queue", "Stack", "Array"],
    },
    {
      question: "Which traversal visits root first?",
      correct_answer: "Preorder",
      incorrect_answers: ["Postorder", "Inorder", "Level Order"],
    },
    {
      question: "Which traversal visits root last?",
      correct_answer: "Postorder",
      incorrect_answers: ["Preorder", "Inorder", "Level Order"],
    },
    {
      question: "Which traversal visits left-root-right?",
      correct_answer: "Inorder",
      incorrect_answers: ["Preorder", "Postorder", "Level Order"],
    },
    {
      question: "Which structure stores data in contiguous memory?",
      correct_answer: "Array",
      incorrect_answers: ["Linked List", "Tree", "Graph"],
    },
    {
      question: "Which queue allows insertion from both ends?",
      correct_answer: "Deque",
      incorrect_answers: ["Priority Queue", "Simple Queue", "Circular Queue"],
    },
    {
      question: "Which queue connects last position to first?",
      correct_answer: "Circular Queue",
      incorrect_answers: ["Deque", "Priority Queue", "Linear Queue"],
    },
    {
      question: "Which structure represents network connections?",
      correct_answer: "Graph",
      incorrect_answers: ["Stack", "Queue", "Array"],
    },
    {
      question: "Which graph contains cycles?",
      correct_answer: "Cyclic Graph",
      incorrect_answers: ["Tree", "Binary Tree", "Heap"],
    },
    {
      question: "Which graph has no cycles?",
      correct_answer: "Acyclic Graph",
      incorrect_answers: ["Cyclic Graph", "Weighted Graph", "Directed Graph"],
    },
    {
      question: "Which tree is used in databases?",
      correct_answer: "B Tree",
      incorrect_answers: ["Binary Tree", "AVL Tree", "Heap"],
    },
    {
      question: "Which data structure is best for undo operation?",
      correct_answer: "Stack",
      incorrect_answers: ["Queue", "Tree", "Array"],
    },
    {
      question: "Which structure is used for scheduling?",
      correct_answer: "Queue",
      incorrect_answers: ["Stack", "Tree", "Graph"],
    },
    {
      question: "Which data structure stores parent-child relation?",
      correct_answer: "Tree",
      incorrect_answers: ["Queue", "Stack", "Array"],
    },
    {
      question: "Which searching method checks every element?",
      correct_answer: "Linear Search",
      incorrect_answers: ["Binary Search", "Hashing", "DFS"],
    },
  ],
  Java: [
    {
      question: "Java is which type of programming language?",
      correct_answer: "Object Oriented",
      incorrect_answers: ["Procedural", "Functional", "Markup"],
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      correct_answer: "extends",
      incorrect_answers: ["implements", "inherits", "super"],
    },
    {
      question: "Which method is the entry point of a Java program?",
      correct_answer: "main()",
      incorrect_answers: ["start()", "run()", "init()"],
    },
    {
      question: "Which of the following is not a Java primitive data type?",
      correct_answer: "String",
      incorrect_answers: ["int", "float", "char"],
    },
    {
      question: "Which keyword is used to create an object in Java?",
      correct_answer: "new",
      incorrect_answers: ["create", "object", "class"],
    },
    {
      question:
        "Which concept allows one interface to be used for multiple forms?",
      correct_answer: "Polymorphism",
      incorrect_answers: ["Encapsulation", "Inheritance", "Abstraction"],
    },
    {
      question: "Which keyword is used to prevent method overriding?",
      correct_answer: "final",
      incorrect_answers: ["static", "const", "private"],
    },
    {
      question: "Which exception is thrown when dividing by zero?",
      correct_answer: "ArithmeticException",
      incorrect_answers: [
        "NullPointerException",
        "IOException",
        "RuntimeException",
      ],
    },
    {
      question: "Which package contains Scanner class?",
      correct_answer: "java.util",
      incorrect_answers: ["java.io", "java.lang", "java.net"],
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      correct_answer: "do-while",
      incorrect_answers: ["for", "while", "foreach"],
    },
    {
      question: "What is JVM?",
      correct_answer: "Java Virtual Machine",
      incorrect_answers: [
        "Java Variable Machine",
        "Joint Virtual Machine",
        "Java Verified Method",
      ],
    },
    {
      question: "Which operator is used for comparison?",
      correct_answer: "==",
      incorrect_answers: ["=", "!=", ">"],
    },
    {
      question: "Which keyword is used to handle exceptions?",
      correct_answer: "catch",
      incorrect_answers: ["throw", "try", "final"],
    },
    {
      question: "Which block always executes in exception handling?",
      correct_answer: "finally",
      incorrect_answers: ["catch", "throw", "try"],
    },
    {
      question: "Which keyword is used to throw exception manually?",
      correct_answer: "throw",
      incorrect_answers: ["throws", "catch", "error"],
    },
    {
      question: "Which keyword declares exceptions?",
      correct_answer: "throws",
      incorrect_answers: ["throw", "try", "catch"],
    },
    {
      question: "Which class is parent of all Java classes?",
      correct_answer: "Object",
      incorrect_answers: ["Class", "Main", "Parent"],
    },
    {
      question: "Which keyword refers current object?",
      correct_answer: "this",
      incorrect_answers: ["super", "self", "current"],
    },
    {
      question: "Which keyword calls parent constructor?",
      correct_answer: "super",
      incorrect_answers: ["this", "parent", "base"],
    },
    {
      question: "Which method prints output in Java?",
      correct_answer: "System.out.println()",
      incorrect_answers: ["print()", "echo()", "cout"],
    },
    {
      question: "Which keyword defines package?",
      correct_answer: "package",
      incorrect_answers: ["import", "include", "namespace"],
    },
    {
      question: "Which keyword imports package?",
      correct_answer: "import",
      incorrect_answers: ["package", "include", "using"],
    },
    {
      question: "Which access modifier is most secure?",
      correct_answer: "private",
      incorrect_answers: ["public", "protected", "default"],
    },
    {
      question: "Which keyword is used for constant variables?",
      correct_answer: "final",
      incorrect_answers: ["const", "static", "fixed"],
    },
    {
      question: "Which keyword is used for static members?",
      correct_answer: "static",
      incorrect_answers: ["final", "fixed", "public"],
    },
    {
      question: "Which collection allows duplicate elements?",
      correct_answer: "List",
      incorrect_answers: ["Set", "Map", "HashSet"],
    },
    {
      question: "Which collection stores unique values?",
      correct_answer: "Set",
      incorrect_answers: ["List", "ArrayList", "Queue"],
    },
    {
      question: "Which collection follows FIFO?",
      correct_answer: "Queue",
      incorrect_answers: ["Stack", "Set", "Tree"],
    },
    {
      question: "Which data type stores true or false?",
      correct_answer: "boolean",
      incorrect_answers: ["int", "char", "float"],
    },
    {
      question: "Which loop is best when iterations are known?",
      correct_answer: "for loop",
      incorrect_answers: ["while", "do-while", "switch"],
    },
    {
      question: "Which statement is used for decision making?",
      correct_answer: "if",
      incorrect_answers: ["loop", "goto", "continue"],
    },
    {
      question: "Which statement handles multiple conditions?",
      correct_answer: "switch",
      incorrect_answers: ["if", "for", "while"],
    },
    {
      question: "Which keyword skips current iteration?",
      correct_answer: "continue",
      incorrect_answers: ["break", "stop", "skip"],
    },
    {
      question: "Which keyword exits loop?",
      correct_answer: "break",
      incorrect_answers: ["continue", "return", "stop"],
    },
    {
      question: "Which operator is used for logical AND?",
      correct_answer: "&&",
      incorrect_answers: ["||", "!", "&"],
    },
    {
      question: "Which operator is used for logical OR?",
      correct_answer: "||",
      incorrect_answers: ["&&", "&", "!"],
    },
    {
      question: "Which method gets string length?",
      correct_answer: "length()",
      incorrect_answers: ["size()", "count()", "len()"],
    },
    {
      question: "Which method converts string to integer?",
      correct_answer: "Integer.parseInt()",
      incorrect_answers: ["parse()", "toInt()", "String.parse()"],
    },
    {
      question: "Which memory stores objects?",
      correct_answer: "Heap",
      incorrect_answers: ["Stack", "ROM", "Cache"],
    },
    {
      question: "Which memory stores local variables?",
      correct_answer: "Stack",
      incorrect_answers: ["Heap", "ROM", "Cache"],
    },
    {
      question: "Which feature supports platform independence?",
      correct_answer: "Bytecode",
      incorrect_answers: ["Compiler", "IDE", "JDK"],
    },
    {
      question: "Which keyword defines abstract class?",
      correct_answer: "abstract",
      incorrect_answers: ["virtual", "interface", "hidden"],
    },
    {
      question: "Which keyword implements interface?",
      correct_answer: "implements",
      incorrect_answers: ["extends", "inherits", "uses"],
    },
    {
      question: "Which concept hides implementation details?",
      correct_answer: "Abstraction",
      incorrect_answers: ["Inheritance", "Polymorphism", "Encapsulation"],
    },
    {
      question: "Which concept binds data and methods?",
      correct_answer: "Encapsulation",
      incorrect_answers: ["Polymorphism", "Abstraction", "Inheritance"],
    },
    {
      question: "Which package contains ArrayList?",
      correct_answer: "java.util",
      incorrect_answers: ["java.io", "java.net", "java.lang"],
    },
    {
      question: "Which method starts thread?",
      correct_answer: "start()",
      incorrect_answers: ["run()", "begin()", "execute()"],
    },
    {
      question: "Which class is used for threads?",
      correct_answer: "Thread",
      incorrect_answers: ["Runnable", "Process", "Task"],
    },
    {
      question: "Which exception occurs when object is null?",
      correct_answer: "NullPointerException",
      incorrect_answers: [
        "IOException",
        "ArithmeticException",
        "ClassNotFoundException",
      ],
    },
    {
      question: "Which exception occurs when number is divided by zero?",
      correct_answer: "ArithmeticException",
      incorrect_answers: [
        "NullPointerException",
        "IOException",
        "RuntimeException",
      ],
    },
    {
      question: "Which keyword prevents inheritance?",
      correct_answer: "final",
      incorrect_answers: ["private", "static", "const"],
    },
    {
      question: "Which keyword is used to define interface?",
      correct_answer: "interface",
      incorrect_answers: ["abstract", "class", "implements"],
    },
  ],
  Python: [
    {
      question: "Python is which type of programming language?",
      correct_answer: "Interpreted",
      incorrect_answers: ["Compiled", "Assembly", "Low level"],
    },
    {
      question: "Which symbol is used for comments in Python?",
      correct_answer: "#",
      incorrect_answers: ["//", "/* */", "--"],
    },
    {
      question: "Which data type is used to store text in Python?",
      correct_answer: "str",
      incorrect_answers: ["int", "float", "bool"],
    },
    {
      question: "Which keyword is used to define a function in Python?",
      correct_answer: "def",
      incorrect_answers: ["function", "func", "define"],
    },
    {
      question: "Which of the following is a mutable data type?",
      correct_answer: "List",
      incorrect_answers: ["Tuple", "String", "Integer"],
    },
    {
      question: "What is the output of print(2 ** 3)?",
      correct_answer: "8",
      incorrect_answers: ["6", "9", "5"],
    },
    {
      question: "Which loop is used when number of iterations is known?",
      correct_answer: "for loop",
      incorrect_answers: ["while loop", "do-while", "foreach"],
    },
    {
      question: "Which keyword is used for conditional statements?",
      correct_answer: "if",
      incorrect_answers: ["loop", "check", "case"],
    },
    {
      question: "Which function is used to get user input?",
      correct_answer: "input()",
      incorrect_answers: ["scan()", "read()", "get()"],
    },
    {
      question: "Which of the following is used to handle exceptions?",
      correct_answer: "try-except",
      incorrect_answers: ["catch-try", "error-handle", "check-error"],
    },
    {
      question: "Which keyword is used to create a class in Python?",
      correct_answer: "class",
      incorrect_answers: ["define", "struct", "object"],
    },
    {
      question: "Which operator is used for equality check?",
      correct_answer: "==",
      incorrect_answers: ["=", "!=", ">"],
    },
    {
      question: "Which data type stores True or False?",
      correct_answer: "bool",
      incorrect_answers: ["str", "float", "char"],
    },
    {
      question: "Which function shows output in Python?",
      correct_answer: "print()",
      incorrect_answers: ["echo()", "cout()", "display()"],
    },
    {
      question: "Which keyword is used to import modules?",
      correct_answer: "import",
      incorrect_answers: ["include", "using", "require"],
    },
    {
      question: "Which collection stores key-value pairs?",
      correct_answer: "Dictionary",
      incorrect_answers: ["List", "Tuple", "Set"],
    },
    {
      question: "Which data type stores unique values?",
      correct_answer: "Set",
      incorrect_answers: ["List", "Tuple", "Dictionary"],
    },
    {
      question: "Which function gives length of list?",
      correct_answer: "len()",
      incorrect_answers: ["size()", "count()", "length()"],
    },
    {
      question: "Which keyword is used to stop loop?",
      correct_answer: "break",
      incorrect_answers: ["continue", "stop", "exit"],
    },
    {
      question: "Which keyword skips current iteration?",
      correct_answer: "continue",
      incorrect_answers: ["break", "pass", "skip"],
    },
    {
      question: "Which keyword is used for empty block?",
      correct_answer: "pass",
      incorrect_answers: ["skip", "empty", "null"],
    },
    {
      question: "Which operator is used for logical AND?",
      correct_answer: "and",
      incorrect_answers: ["&&", "&", "AND"],
    },
    {
      question: "Which operator is used for logical OR?",
      correct_answer: "or",
      incorrect_answers: ["||", "|", "OR"],
    },
    {
      question: "Which keyword defines anonymous function?",
      correct_answer: "lambda",
      incorrect_answers: ["func", "anonymous", "def"],
    },
    {
      question: "Which method adds item to list?",
      correct_answer: "append()",
      incorrect_answers: ["add()", "insertItem()", "push()"],
    },
    {
      question: "Which method removes item from list?",
      correct_answer: "remove()",
      incorrect_answers: ["delete()", "popitem()", "erase()"],
    },
    {
      question: "Which method removes last element from list?",
      correct_answer: "pop()",
      incorrect_answers: ["delete()", "remove()", "discard()"],
    },
    {
      question: "Which keyword handles exceptions?",
      correct_answer: "except",
      incorrect_answers: ["catch", "error", "handle"],
    },
    {
      question: "Which block always executes in exception handling?",
      correct_answer: "finally",
      incorrect_answers: ["except", "try", "throw"],
    },
    {
      question: "Which library is used for numerical operations?",
      correct_answer: "NumPy",
      incorrect_answers: ["Pandas", "Flask", "Tkinter"],
    },
    {
      question: "Which library is used for data analysis?",
      correct_answer: "Pandas",
      incorrect_answers: ["NumPy", "Matplotlib", "Flask"],
    },
    {
      question: "Which library is used for plotting graphs?",
      correct_answer: "Matplotlib",
      incorrect_answers: ["Pandas", "Tkinter", "NumPy"],
    },
    {
      question: "Which framework is used for web development?",
      correct_answer: "Flask",
      incorrect_answers: ["NumPy", "Pandas", "Tkinter"],
    },
    {
      question: "Which keyword is used for inheritance?",
      correct_answer: "class Child(Parent)",
      incorrect_answers: ["extends", "inherits", "super"],
    },
    {
      question: "Which function converts string to integer?",
      correct_answer: "int()",
      incorrect_answers: ["str()", "float()", "char()"],
    },
    {
      question: "Which function converts integer to string?",
      correct_answer: "str()",
      incorrect_answers: ["int()", "float()", "string()"],
    },
    {
      question: "Which function converts value to float?",
      correct_answer: "float()",
      incorrect_answers: ["int()", "str()", "decimal()"],
    },
    {
      question: "Which loop runs while condition is true?",
      correct_answer: "while loop",
      incorrect_answers: ["for loop", "foreach", "do-while"],
    },
    {
      question: "Which keyword returns value from function?",
      correct_answer: "return",
      incorrect_answers: ["print", "yield", "pass"],
    },
    {
      question: "Which method converts string to uppercase?",
      correct_answer: "upper()",
      incorrect_answers: ["uppercase()", "capital()", "up()"],
    },
    {
      question: "Which method converts string to lowercase?",
      correct_answer: "lower()",
      incorrect_answers: ["small()", "down()", "lowercase()"],
    },
    {
      question: "Which data type is immutable?",
      correct_answer: "Tuple",
      incorrect_answers: ["List", "Dictionary", "Set"],
    },
    {
      question: "Which keyword creates object in Python?",
      correct_answer: "No keyword needed",
      incorrect_answers: ["new", "create", "object"],
    },
    {
      question: "Which symbol is used for list indexing?",
      correct_answer: "[]",
      incorrect_answers: ["()", "{}", "<>"],
    },
    {
      question: "Which operator is used for exponent?",
      correct_answer: "**",
      incorrect_answers: ["^", "//", "%%"],
    },
    {
      question: "Which operator performs floor division?",
      correct_answer: "//",
      incorrect_answers: ["/", "%", "**"],
    },
    {
      question: "Which method sorts list permanently?",
      correct_answer: "sort()",
      incorrect_answers: ["sortedlist()", "arrange()", "order()"],
    },
    {
      question: "Which function sorts data temporarily?",
      correct_answer: "sorted()",
      incorrect_answers: ["sort()", "arrange()", "order()"],
    },
    {
      question: "Which file mode is used for reading?",
      correct_answer: "r",
      incorrect_answers: ["w", "a", "x"],
    },
    {
      question: "Which file mode is used for writing?",
      correct_answer: "w",
      incorrect_answers: ["r", "a", "x"],
    },
    {
      question: "Which keyword is used with loops for else block?",
      correct_answer: "else",
      incorrect_answers: ["elseif", "default", "finally"],
    },
    {
      question: "Python was created by?",
      correct_answer: "Guido van Rossum",
      incorrect_answers: [
        "James Gosling",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
    },
  ],
  OOSE: [
    {
      question: "What does OOSE stand for?",
      correct_answer: "Object Oriented Software Engineering",
      incorrect_answers: [
        "Object Operating System Environment",
        "Online Object Software Engine",
        "Object Oriented System Execution",
      ],
    },
    {
      question: "Which language is commonly used in OOSE diagrams?",
      correct_answer: "UML",
      incorrect_answers: ["HTML", "XML", "SQL"],
    },
    {
      question: "What does UML stand for?",
      correct_answer: "Unified Modeling Language",
      incorrect_answers: [
        "Universal Modeling Language",
        "Unified Machine Language",
        "Unique Modeling Language",
      ],
    },
    {
      question: "Which diagram represents system functionality?",
      correct_answer: "Use Case Diagram",
      incorrect_answers: ["Class Diagram", "Sequence Diagram", "State Diagram"],
    },
    {
      question: "Which diagram shows interaction over time?",
      correct_answer: "Sequence Diagram",
      incorrect_answers: [
        "Use Case Diagram",
        "Class Diagram",
        "Component Diagram",
      ],
    },
    {
      question: "Which diagram represents system structure?",
      correct_answer: "Class Diagram",
      incorrect_answers: [
        "Activity Diagram",
        "Sequence Diagram",
        "Use Case Diagram",
      ],
    },
    {
      question: "Which relationship represents 'is-a'?",
      correct_answer: "Inheritance",
      incorrect_answers: ["Aggregation", "Association", "Composition"],
    },
    {
      question: "Which relationship represents 'has-a'?",
      correct_answer: "Aggregation",
      incorrect_answers: ["Inheritance", "Polymorphism", "Abstraction"],
    },
    {
      question: "Which concept hides implementation details?",
      correct_answer: "Encapsulation",
      incorrect_answers: ["Inheritance", "Polymorphism", "Association"],
    },
    {
      question: "Which concept allows multiple forms?",
      correct_answer: "Polymorphism",
      incorrect_answers: ["Encapsulation", "Inheritance", "Abstraction"],
    },
    {
      question: "Which concept focuses on essential features?",
      correct_answer: "Abstraction",
      incorrect_answers: ["Inheritance", "Encapsulation", "Association"],
    },
    {
      question: "Which diagram shows workflow of activities?",
      correct_answer: "Activity Diagram",
      incorrect_answers: [
        "Class Diagram",
        "Sequence Diagram",
        "Deployment Diagram",
      ],
    },
    {
      question: "Which diagram represents object states?",
      correct_answer: "State Diagram",
      incorrect_answers: [
        "Use Case Diagram",
        "Class Diagram",
        "Component Diagram",
      ],
    },
    {
      question: "Which diagram shows physical deployment?",
      correct_answer: "Deployment Diagram",
      incorrect_answers: [
        "Sequence Diagram",
        "Use Case Diagram",
        "Activity Diagram",
      ],
    },
    {
      question: "Which diagram shows software components?",
      correct_answer: "Component Diagram",
      incorrect_answers: [
        "Class Diagram",
        "Activity Diagram",
        "Sequence Diagram",
      ],
    },
    {
      question: "OOSE mainly follows which approach?",
      correct_answer: "Object Oriented Approach",
      incorrect_answers: [
        "Procedural Approach",
        "Functional Approach",
        "Sequential Approach",
      ],
    },
    {
      question: "Which process model is iterative?",
      correct_answer: "RUP",
      incorrect_answers: ["Waterfall", "V-Model", "Linear Model"],
    },
    {
      question: "What does RUP stand for?",
      correct_answer: "Rational Unified Process",
      incorrect_answers: [
        "Rapid Unified Process",
        "Rational User Process",
        "Reliable Unified Process",
      ],
    },
    {
      question: "Which UML diagram is dynamic?",
      correct_answer: "Sequence Diagram",
      incorrect_answers: [
        "Class Diagram",
        "Object Diagram",
        "Component Diagram",
      ],
    },
    {
      question: "Which UML diagram is static?",
      correct_answer: "Class Diagram",
      incorrect_answers: [
        "Sequence Diagram",
        "Activity Diagram",
        "State Diagram",
      ],
    },
    {
      question: "Who interacts with the system in use case diagram?",
      correct_answer: "Actor",
      incorrect_answers: ["Class", "Object", "Module"],
    },
    {
      question: "Which symbol represents actor in UML?",
      correct_answer: "Stick Figure",
      incorrect_answers: ["Rectangle", "Circle", "Triangle"],
    },
    {
      question: "Which diagram is used for database structure?",
      correct_answer: "Class Diagram",
      incorrect_answers: [
        "Activity Diagram",
        "Sequence Diagram",
        "Use Case Diagram",
      ],
    },
    {
      question: "What is an object?",
      correct_answer: "Instance of a class",
      incorrect_answers: [
        "Blueprint of class",
        "Function of class",
        "Variable only",
      ],
    },
    {
      question: "What is a class?",
      correct_answer: "Blueprint of objects",
      incorrect_answers: [
        "Instance of object",
        "Database table",
        "Single function",
      ],
    },
    {
      question: "Which diagram focuses on message passing?",
      correct_answer: "Communication Diagram",
      incorrect_answers: [
        "Class Diagram",
        "Deployment Diagram",
        "Use Case Diagram",
      ],
    },
    {
      question: "Which diagram models business processes?",
      correct_answer: "Activity Diagram",
      incorrect_answers: [
        "Component Diagram",
        "Class Diagram",
        "State Diagram",
      ],
    },
    {
      question: "Which relationship is strongest?",
      correct_answer: "Composition",
      incorrect_answers: ["Aggregation", "Association", "Dependency"],
    },
    {
      question: "Which relationship is weakest?",
      correct_answer: "Dependency",
      incorrect_answers: ["Composition", "Inheritance", "Aggregation"],
    },
    {
      question: "What is inheritance used for?",
      correct_answer: "Code Reusability",
      incorrect_answers: ["Data Deletion", "Compilation", "Encryption"],
    },
    {
      question: "Which testing checks individual units?",
      correct_answer: "Unit Testing",
      incorrect_answers: [
        "Integration Testing",
        "System Testing",
        "Acceptance Testing",
      ],
    },
    {
      question: "Which testing checks combined modules?",
      correct_answer: "Integration Testing",
      incorrect_answers: ["Unit Testing", "Alpha Testing", "Beta Testing"],
    },
    {
      question: "Which testing checks full system?",
      correct_answer: "System Testing",
      incorrect_answers: [
        "Unit Testing",
        "Integration Testing",
        "Regression Testing",
      ],
    },
    {
      question: "Which model is sequential?",
      correct_answer: "Waterfall Model",
      incorrect_answers: ["RUP", "Agile", "Spiral"],
    },
    {
      question: "Which methodology supports frequent changes?",
      correct_answer: "Agile",
      incorrect_answers: ["Waterfall", "V-Model", "RAD"],
    },
    {
      question: "What is coupling?",
      correct_answer: "Dependency between modules",
      incorrect_answers: ["Data storage", "Object creation", "Code execution"],
    },
    {
      question: "What is cohesion?",
      correct_answer: "Relatedness within module",
      incorrect_answers: [
        "Module dependency",
        "Data redundancy",
        "Testing process",
      ],
    },
    {
      question: "Which principle reduces coupling?",
      correct_answer: "Modularity",
      incorrect_answers: ["Inheritance", "Polymorphism", "Compilation"],
    },
    {
      question: "What is software engineering?",
      correct_answer: "Systematic software development",
      incorrect_answers: [
        "Hardware design",
        "Network management",
        "Database storage",
      ],
    },
    {
      question: "OOSE mainly focuses on?",
      correct_answer: "Objects and Classes",
      incorrect_answers: ["Functions", "Algorithms", "Networks"],
    },
    {
      question: "Which diagram shows chronological order?",
      correct_answer: "Sequence Diagram",
      incorrect_answers: [
        "Class Diagram",
        "Use Case Diagram",
        "Deployment Diagram",
      ],
    },
    {
      question: "Which UML diagram contains attributes and methods?",
      correct_answer: "Class Diagram",
      incorrect_answers: [
        "Use Case Diagram",
        "State Diagram",
        "Activity Diagram",
      ],
    },
    {
      question: "Which symbol represents class in UML?",
      correct_answer: "Rectangle",
      incorrect_answers: ["Circle", "Triangle", "Arrow"],
    },
    {
      question: "What is encapsulation?",
      correct_answer: "Binding data and methods together",
      incorrect_answers: [
        "Code duplication",
        "Multiple inheritance",
        "Object deletion",
      ],
    },
    {
      question: "What is polymorphism?",
      correct_answer: "One interface many forms",
      incorrect_answers: ["Code hiding", "Object creation", "Class deletion"],
    },
    {
      question: "Which diagram is best for login flow?",
      correct_answer: "Activity Diagram",
      incorrect_answers: [
        "Class Diagram",
        "Component Diagram",
        "Deployment Diagram",
      ],
    },
    {
      question: "Which diagram is used for hardware nodes?",
      correct_answer: "Deployment Diagram",
      incorrect_answers: [
        "Sequence Diagram",
        "Activity Diagram",
        "Class Diagram",
      ],
    },
    {
      question: "Which relationship uses hollow diamond?",
      correct_answer: "Aggregation",
      incorrect_answers: ["Composition", "Inheritance", "Dependency"],
    },
    {
      question: "Which relationship uses filled diamond?",
      correct_answer: "Composition",
      incorrect_answers: ["Aggregation", "Association", "Dependency"],
    },
    {
      question: "Which relationship uses arrow line?",
      correct_answer: "Inheritance",
      incorrect_answers: ["Composition", "Aggregation", "Association"],
    },
    {
      question: "OOSE improves?",
      correct_answer: "Maintainability",
      incorrect_answers: ["Complexity", "Errors", "Redundancy"],
    },
    {
      question: "Which phase gathers requirements?",
      correct_answer: "Requirement Analysis",
      incorrect_answers: ["Testing", "Deployment", "Maintenance"],
    },
  ],
  "Information Security": [
    {
      question: "What does CIA stand for in Information Security?",
      correct_answer: "Confidentiality, Integrity, Availability",
      incorrect_answers: [
        "Control, Integrity, Access",
        "Cyber, Internet, Authentication",
        "Confidential, Internal, Access",
      ],
    },
    {
      question: "Which attack tricks users into revealing information?",
      correct_answer: "Phishing",
      incorrect_answers: ["Spoofing", "Sniffing", "Hacking"],
    },
    {
      question: "Which device protects a network from unauthorized access?",
      correct_answer: "Firewall",
      incorrect_answers: ["Switch", "Hub", "Repeater"],
    },
    {
      question: "Which malware demands payment from victim?",
      correct_answer: "Ransomware",
      incorrect_answers: ["Virus", "Trojan", "Spyware"],
    },
    {
      question: "What is encryption used for?",
      correct_answer: "Protecting data",
      incorrect_answers: [
        "Deleting data",
        "Compressing data",
        "Formatting data",
      ],
    },
    {
      question: "Which protocol is secure?",
      correct_answer: "HTTPS",
      incorrect_answers: ["HTTP", "FTP", "Telnet"],
    },
    {
      question: "Which attack floods a server with traffic?",
      correct_answer: "DDoS",
      incorrect_answers: ["Phishing", "SQL Injection", "Spoofing"],
    },
    {
      question: "Which process verifies identity?",
      correct_answer: "Authentication",
      incorrect_answers: ["Authorization", "Hashing", "Accounting"],
    },
    {
      question: "Which method stores passwords securely?",
      correct_answer: "Hashing",
      incorrect_answers: ["Encoding", "Plain Text", "Compression"],
    },
    {
      question: "Which attack injects malicious SQL queries?",
      correct_answer: "SQL Injection",
      incorrect_answers: ["Phishing", "XSS", "DDoS"],
    },
    {
      question: "What does VPN stand for?",
      correct_answer: "Virtual Private Network",
      incorrect_answers: [
        "Virtual Protected Network",
        "Verified Private Network",
        "Virtual Public Network",
      ],
    },
    {
      question: "Which malware secretly monitors user activity?",
      correct_answer: "Spyware",
      incorrect_answers: ["Virus", "Worm", "Trojan"],
    },
    {
      question: "Which malware replicates itself automatically?",
      correct_answer: "Worm",
      incorrect_answers: ["Spyware", "Trojan", "Adware"],
    },
    {
      question: "Which malware hides inside legitimate software?",
      correct_answer: "Trojan",
      incorrect_answers: ["Virus", "Spyware", "Ransomware"],
    },
    {
      question: "What is the full form of OTP?",
      correct_answer: "One Time Password",
      incorrect_answers: [
        "Online Transaction Password",
        "Only Time Password",
        "One Transfer Protocol",
      ],
    },
    {
      question: "Which attack intercepts communication secretly?",
      correct_answer: "Man in the Middle Attack",
      incorrect_answers: ["DDoS", "Phishing", "Spoofing"],
    },
    {
      question: "Which security principle ensures data is not altered?",
      correct_answer: "Integrity",
      incorrect_answers: ["Availability", "Confidentiality", "Authentication"],
    },
    {
      question: "Which principle ensures data is accessible?",
      correct_answer: "Availability",
      incorrect_answers: ["Integrity", "Confidentiality", "Authorization"],
    },
    {
      question: "Which principle keeps data secret?",
      correct_answer: "Confidentiality",
      incorrect_answers: ["Availability", "Integrity", "Accounting"],
    },
    {
      question: "Which attack displays fake login page?",
      correct_answer: "Phishing",
      incorrect_answers: ["Spoofing", "Sniffing", "Scanning"],
    },
    {
      question: "Which tool detects network intrusions?",
      correct_answer: "IDS",
      incorrect_answers: ["CPU", "Compiler", "Debugger"],
    },
    {
      question: "What does IDS stand for?",
      correct_answer: "Intrusion Detection System",
      incorrect_answers: [
        "Internal Detection Service",
        "Integrated Data System",
        "Internet Detection Software",
      ],
    },
    {
      question: "Which security system blocks attacks automatically?",
      correct_answer: "IPS",
      incorrect_answers: ["IDS", "VPN", "SMTP"],
    },
    {
      question: "What does IPS stand for?",
      correct_answer: "Intrusion Prevention System",
      incorrect_answers: [
        "Internal Protection Service",
        "Internet Prevention System",
        "Integrated Protection Software",
      ],
    },
    {
      question: "Which protocol is used to send emails?",
      correct_answer: "SMTP",
      incorrect_answers: ["FTP", "HTTP", "SNMP"],
    },
    {
      question: "Which protocol securely transfers files?",
      correct_answer: "SFTP",
      incorrect_answers: ["FTP", "HTTP", "SMTP"],
    },
    {
      question: "Which attack steals session information?",
      correct_answer: "Session Hijacking",
      incorrect_answers: ["Phishing", "DDoS", "Spoofing"],
    },
    {
      question: "What is biometric authentication based on?",
      correct_answer: "Physical traits",
      incorrect_answers: ["Passwords", "PINs", "Usernames"],
    },
    {
      question: "Which is an example of biometric security?",
      correct_answer: "Fingerprint Scanner",
      incorrect_answers: ["Password", "PIN", "Captcha"],
    },
    {
      question: "Which attack guesses passwords repeatedly?",
      correct_answer: "Brute Force Attack",
      incorrect_answers: ["DDoS", "Spoofing", "Sniffing"],
    },
    {
      question: "What is antivirus used for?",
      correct_answer: "Detecting malware",
      incorrect_answers: [
        "Encrypting data",
        "Formatting disks",
        "Backing up files",
      ],
    },
    {
      question: "Which attack modifies website content?",
      correct_answer: "Website Defacement",
      incorrect_answers: ["Phishing", "Spoofing", "Sniffing"],
    },
    {
      question: "What is cyber security?",
      correct_answer: "Protection of digital systems",
      incorrect_answers: [
        "Computer manufacturing",
        "Website designing",
        "Programming only",
      ],
    },
    {
      question: "Which attack records keystrokes secretly?",
      correct_answer: "Keylogging",
      incorrect_answers: ["Spoofing", "Phishing", "Scanning"],
    },
    {
      question: "Which security method uses secret key?",
      correct_answer: "Symmetric Encryption",
      incorrect_answers: ["Asymmetric Encryption", "Hashing", "Authentication"],
    },
    {
      question: "Which encryption uses public and private keys?",
      correct_answer: "Asymmetric Encryption",
      incorrect_answers: ["Symmetric Encryption", "Hashing", "Compression"],
    },
    {
      question: "Which attack redirects users to fake websites?",
      correct_answer: "DNS Spoofing",
      incorrect_answers: ["Phishing", "Sniffing", "DDoS"],
    },
    {
      question: "Which layer handles encryption in OSI model?",
      correct_answer: "Presentation Layer",
      incorrect_answers: [
        "Transport Layer",
        "Network Layer",
        "Application Layer",
      ],
    },
    {
      question: "What is social engineering?",
      correct_answer: "Manipulating people for information",
      incorrect_answers: [
        "Network designing",
        "Programming technique",
        "Hardware testing",
      ],
    },
    {
      question: "Which attack listens to network traffic secretly?",
      correct_answer: "Sniffing",
      incorrect_answers: ["Phishing", "DDoS", "Spoofing"],
    },
    {
      question: "Which attack changes sender identity?",
      correct_answer: "Spoofing",
      incorrect_answers: ["Sniffing", "Phishing", "Scanning"],
    },
    {
      question: "Which protocol is used for secure remote login?",
      correct_answer: "SSH",
      incorrect_answers: ["HTTP", "FTP", "Telnet"],
    },
    {
      question: "Which protocol is insecure for remote login?",
      correct_answer: "Telnet",
      incorrect_answers: ["SSH", "HTTPS", "SFTP"],
    },
    {
      question: "What is backup used for?",
      correct_answer: "Recovering lost data",
      incorrect_answers: [
        "Encrypting data",
        "Deleting malware",
        "Blocking traffic",
      ],
    },
    {
      question: "Which security attack uses malicious scripts in webpages?",
      correct_answer: "XSS",
      incorrect_answers: ["SQL Injection", "DDoS", "Phishing"],
    },
    {
      question: "What does XSS stand for?",
      correct_answer: "Cross Site Scripting",
      incorrect_answers: [
        "Cross Server Security",
        "Extra Site Scripting",
        "Cross Security Service",
      ],
    },
    {
      question: "Which policy defines security rules?",
      correct_answer: "Security Policy",
      incorrect_answers: ["Flowchart", "Algorithm", "Protocol"],
    },
    {
      question: "Which attack targets wireless networks?",
      correct_answer: "WiFi Hacking",
      incorrect_answers: ["SQL Injection", "XSS", "DDoS"],
    },
    {
      question: "What is digital signature used for?",
      correct_answer: "Authentication and Integrity",
      incorrect_answers: ["Data Compression", "Virus Detection", "Formatting"],
    },
    {
      question: "Which security goal prevents repudiation?",
      correct_answer: "Non Repudiation",
      incorrect_answers: ["Integrity", "Availability", "Confidentiality"],
    },
    {
      question: "Which attack locks computer screen demanding payment?",
      correct_answer: "Ransomware",
      incorrect_answers: ["Spyware", "Adware", "Trojan"],
    },
  ],
  "Digital Marketing": [
    {
      question: "What does SEO stand for?",
      correct_answer: "Search Engine Optimization",
      incorrect_answers: [
        "Search Engine Operation",
        "Site Engine Optimization",
        "Search Engine Organizer",
      ],
    },
    {
      question: "Which platform is mainly used for video marketing?",
      correct_answer: "YouTube",
      incorrect_answers: ["Excel", "MS Word", "Photoshop"],
    },
    {
      question: "What does PPC stand for?",
      correct_answer: "Pay Per Click",
      incorrect_answers: ["Pay Per Code", "Post Per Click", "Page Per Click"],
    },
    {
      question: "Which tool is used for website traffic analysis?",
      correct_answer: "Google Analytics",
      incorrect_answers: ["MS Excel", "Photoshop", "Canva"],
    },
    {
      question: "Which platform is mainly used for professional networking?",
      correct_answer: "LinkedIn",
      incorrect_answers: ["Instagram", "Snapchat", "WhatsApp"],
    },
    {
      question: "What is email marketing?",
      correct_answer: "Promoting products through emails",
      incorrect_answers: [
        "Deleting emails",
        "Programming emails",
        "Creating websites",
      ],
    },
    {
      question: "Which marketing uses social media influencers?",
      correct_answer: "Influencer Marketing",
      incorrect_answers: [
        "Affiliate Marketing",
        "Email Marketing",
        "Direct Marketing",
      ],
    },
    {
      question: "Which social media platform is owned by Meta?",
      correct_answer: "Instagram",
      incorrect_answers: ["YouTube", "LinkedIn", "Twitter"],
    },
    {
      question: "What is content marketing?",
      correct_answer: "Sharing valuable content",
      incorrect_answers: [
        "Selling hardware",
        "Deleting ads",
        "Coding websites",
      ],
    },
    {
      question: "Which search engine is most widely used?",
      correct_answer: "Google",
      incorrect_answers: ["Yahoo", "Bing", "DuckDuckGo"],
    },
    {
      question: "Which metric measures ad clicks?",
      correct_answer: "CTR",
      incorrect_answers: ["ROI", "SEO", "SERP"],
    },
    {
      question: "What does CTR stand for?",
      correct_answer: "Click Through Rate",
      incorrect_answers: [
        "Customer Traffic Rate",
        "Click Target Ratio",
        "Content Through Reach",
      ],
    },
    {
      question: "What is the main purpose of SEO?",
      correct_answer: "Improve website ranking",
      incorrect_answers: [
        "Increase hardware speed",
        "Delete spam",
        "Create graphics",
      ],
    },
    {
      question: "Which platform is popular for short videos?",
      correct_answer: "TikTok",
      incorrect_answers: ["LinkedIn", "Pinterest", "Telegram"],
    },
    {
      question: "Which marketing method promotes products through partners?",
      correct_answer: "Affiliate Marketing",
      incorrect_answers: [
        "Email Marketing",
        "Social Marketing",
        "Direct Marketing",
      ],
    },
    {
      question: "Which is an example of search engine?",
      correct_answer: "Google",
      incorrect_answers: ["Instagram", "Facebook", "Canva"],
    },
    {
      question: "What is keyword research used for?",
      correct_answer: "Finding search terms",
      incorrect_answers: ["Editing videos", "Creating logos", "Sending emails"],
    },
    {
      question: "Which tool helps in keyword research?",
      correct_answer: "Google Keyword Planner",
      incorrect_answers: ["MS Word", "Notepad", "Paint"],
    },
    {
      question: "What does ROI stand for?",
      correct_answer: "Return on Investment",
      incorrect_answers: [
        "Rate of Income",
        "Revenue on Interest",
        "Return of Internet",
      ],
    },
    {
      question: "Which platform is mainly image sharing?",
      correct_answer: "Instagram",
      incorrect_answers: ["LinkedIn", "Telegram", "Gmail"],
    },
    {
      question: "Which marketing method uses paid advertisements?",
      correct_answer: "PPC",
      incorrect_answers: ["SEO", "Content Marketing", "Affiliate Marketing"],
    },
    {
      question: "What is a backlink?",
      correct_answer: "Link from another website",
      incorrect_answers: ["Broken link", "Deleted webpage", "Hidden content"],
    },
    {
      question: "What does SERP stand for?",
      correct_answer: "Search Engine Results Page",
      incorrect_answers: [
        "Search Engine Ranking Process",
        "Site Engine Result Panel",
        "Search Engine Response Page",
      ],
    },
    {
      question: "Which platform is used for business advertisements?",
      correct_answer: "Google Ads",
      incorrect_answers: ["MS Paint", "Notepad", "Photoshop"],
    },
    {
      question: "Which marketing focuses on customer engagement?",
      correct_answer: "Social Media Marketing",
      incorrect_answers: [
        "Hardware Marketing",
        "Offline Marketing",
        "Television Repair",
      ],
    },
    {
      question: "What is conversion rate?",
      correct_answer: "Visitors becoming customers",
      incorrect_answers: [
        "Page loading speed",
        "Website color scheme",
        "Ad duration",
      ],
    },
    {
      question: "Which platform is used for microblogging?",
      correct_answer: "Twitter",
      incorrect_answers: ["Instagram", "YouTube", "Pinterest"],
    },
    {
      question: "What is bounce rate?",
      correct_answer: "Users leaving website quickly",
      incorrect_answers: [
        "Website speed",
        "Ad ranking",
        "Customer purchase rate",
      ],
    },
    {
      question: "Which content format is most engaging online?",
      correct_answer: "Video",
      incorrect_answers: ["Text only", "Tables", "PDF only"],
    },
    {
      question: "Which social media platform is best for B2B marketing?",
      correct_answer: "LinkedIn",
      incorrect_answers: ["Snapchat", "TikTok", "Pinterest"],
    },
    {
      question: "What is organic traffic?",
      correct_answer: "Free website visitors",
      incorrect_answers: [
        "Paid advertisements",
        "Fake users",
        "Offline customers",
      ],
    },
    {
      question: "Which tool schedules social media posts?",
      correct_answer: "Buffer",
      incorrect_answers: ["Compiler", "Debugger", "MS Paint"],
    },
    {
      question: "Which metric measures user engagement?",
      correct_answer: "Likes and Comments",
      incorrect_answers: ["CPU Usage", "RAM Size", "Bandwidth"],
    },
    {
      question: "What is influencer marketing based on?",
      correct_answer: "Popular creators promoting products",
      incorrect_answers: [
        "Hardware sales",
        "Database management",
        "Programming",
      ],
    },
    {
      question: "What is target audience?",
      correct_answer: "Specific customer group",
      incorrect_answers: [
        "Website owners",
        "Search engines",
        "Software developers",
      ],
    },
    {
      question: "Which platform is used for pin-based marketing?",
      correct_answer: "Pinterest",
      incorrect_answers: ["Twitter", "Telegram", "WhatsApp"],
    },
    {
      question: "Which email metric measures opened emails?",
      correct_answer: "Open Rate",
      incorrect_answers: ["Bounce Rate", "CTR", "SEO"],
    },
    {
      question: "What is a call to action?",
      correct_answer: "Encouraging user action",
      incorrect_answers: ["Phone support", "Website coding", "Server backup"],
    },
    {
      question: "Which digital marketing channel uses text messages?",
      correct_answer: "SMS Marketing",
      incorrect_answers: ["SEO", "Content Marketing", "Affiliate Marketing"],
    },
    {
      question: "Which platform is mainly for photo sharing?",
      correct_answer: "Instagram",
      incorrect_answers: ["LinkedIn", "Gmail", "Telegram"],
    },
    {
      question: "What is brand awareness?",
      correct_answer: "Recognition of brand by audience",
      incorrect_answers: [
        "Website coding",
        "Database optimization",
        "Ad blocking",
      ],
    },
    {
      question: "Which marketing strategy focuses on valuable information?",
      correct_answer: "Content Marketing",
      incorrect_answers: [
        "Direct Selling",
        "Cold Calling",
        "Offline Marketing",
      ],
    },
    {
      question: "What is social media marketing?",
      correct_answer: "Promoting products on social platforms",
      incorrect_answers: [
        "Building hardware",
        "Programming software",
        "Database design",
      ],
    },
    {
      question: "Which metric measures advertisement profit?",
      correct_answer: "ROI",
      incorrect_answers: ["SEO", "CTR", "SERP"],
    },
    {
      question: "Which platform is mainly used for online ads?",
      correct_answer: "Google Ads",
      incorrect_answers: ["MS Word", "Excel", "Paint"],
    },
    {
      question: "Which factor improves SEO ranking?",
      correct_answer: "Quality Content",
      incorrect_answers: ["Broken links", "Slow website", "Spam keywords"],
    },
    {
      question: "What is mobile marketing?",
      correct_answer: "Marketing through mobile devices",
      incorrect_answers: [
        "Laptop repairing",
        "Desktop sales",
        "Server maintenance",
      ],
    },
    {
      question: "Which social media platform uses reels?",
      correct_answer: "Instagram",
      incorrect_answers: ["LinkedIn", "Pinterest", "Telegram"],
    },
    {
      question: "Which platform provides website analytics?",
      correct_answer: "Google Analytics",
      incorrect_answers: ["Canva", "Photoshop", "Notepad"],
    },
    {
      question: "What is digital marketing?",
      correct_answer: "Marketing using digital channels",
      incorrect_answers: [
        "Hardware designing",
        "Computer assembly",
        "Programming only",
      ],
    },
    {
      question: "Which strategy helps websites rank higher naturally?",
      correct_answer: "SEO",
      incorrect_answers: ["PPC", "Email Spam", "Cold Calling"],
    },
  ],
  "Full Stack": [
    {
      question: "What is Full Stack Development?",
      correct_answer: "Frontend and Backend Development",
      incorrect_answers: ["Frontend only", "Backend only", "Database only"],
    },
    {
      question: "Which language is used for webpage structure?",
      correct_answer: "HTML",
      incorrect_answers: ["CSS", "Python", "MongoDB"],
    },
    {
      question: "Which language is used for webpage styling?",
      correct_answer: "CSS",
      incorrect_answers: ["HTML", "Java", "SQL"],
    },
    {
      question: "Which language is mainly used for webpage interactivity?",
      correct_answer: "JavaScript",
      incorrect_answers: ["HTML", "CSS", "MySQL"],
    },
    {
      question: "Which technology is used for frontend development?",
      correct_answer: "React",
      incorrect_answers: ["MongoDB", "Node.js", "MySQL"],
    },
    {
      question: "Which technology is used for backend development?",
      correct_answer: "Node.js",
      incorrect_answers: ["HTML", "CSS", "Bootstrap"],
    },
    {
      question: "Which database is NoSQL?",
      correct_answer: "MongoDB",
      incorrect_answers: ["MySQL", "Oracle", "PostgreSQL"],
    },
    {
      question: "Which database uses tables and rows?",
      correct_answer: "MySQL",
      incorrect_answers: ["MongoDB", "Firebase", "Redis"],
    },
    {
      question: "Which protocol is mainly used on websites?",
      correct_answer: "HTTP",
      incorrect_answers: ["FTP", "SMTP", "POP3"],
    },
    {
      question: "What does API stand for?",
      correct_answer: "Application Programming Interface",
      incorrect_answers: [
        "Advanced Program Integration",
        "Application Process Internet",
        "Applied Programming Interface",
      ],
    },
    {
      question: "Which framework is used with Node.js?",
      correct_answer: "Express.js",
      incorrect_answers: ["Django", "Flask", "Laravel"],
    },
    {
      question: "Which HTML tag creates hyperlink?",
      correct_answer: "<a>",
      incorrect_answers: ["<h1>", "<img>", "<p>"],
    },
    {
      question: "Which CSS property changes text color?",
      correct_answer: "color",
      incorrect_answers: ["background", "font-size", "border"],
    },
    {
      question: "Which JavaScript keyword declares variable?",
      correct_answer: "let",
      incorrect_answers: ["define", "varies", "string"],
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      correct_answer: "//",
      incorrect_answers: ["#", "<!-- -->", "**"],
    },
    {
      question: "Which method prints output in browser console?",
      correct_answer: "console.log()",
      incorrect_answers: ["print()", "echo()", "write()"],
    },
    {
      question: "Which HTML tag inserts image?",
      correct_answer: "<img>",
      incorrect_answers: ["<image>", "<src>", "<pic>"],
    },
    {
      question: "Which CSS property changes background color?",
      correct_answer: "background-color",
      incorrect_answers: ["color", "font-color", "bg"],
    },
    {
      question: "Which JavaScript function displays popup?",
      correct_answer: "alert()",
      incorrect_answers: ["print()", "display()", "popup()"],
    },
    {
      question: "Which HTML tag creates paragraph?",
      correct_answer: "<p>",
      incorrect_answers: ["<para>", "<text>", "<h1>"],
    },
    {
      question: "Which company developed React?",
      correct_answer: "Facebook",
      incorrect_answers: ["Google", "Microsoft", "Apple"],
    },
    {
      question: "Which framework is used for responsive design?",
      correct_answer: "Bootstrap",
      incorrect_answers: ["Express", "MongoDB", "Node.js"],
    },
    {
      question: "Which method sends data to server securely?",
      correct_answer: "POST",
      incorrect_answers: ["GET", "FETCH", "SHOW"],
    },
    {
      question: "Which HTTP method retrieves data?",
      correct_answer: "GET",
      incorrect_answers: ["POST", "DELETE", "PUT"],
    },
    {
      question: "Which command installs npm packages?",
      correct_answer: "npm install",
      incorrect_answers: ["node install", "npm start", "npm create"],
    },
    {
      question: "What does npm stand for?",
      correct_answer: "Node Package Manager",
      incorrect_answers: [
        "New Program Manager",
        "Node Process Module",
        "Network Package Manager",
      ],
    },
    {
      question: "Which tool is used for version control?",
      correct_answer: "Git",
      incorrect_answers: ["Node", "React", "MongoDB"],
    },
    {
      question: "Which platform hosts Git repositories?",
      correct_answer: "GitHub",
      incorrect_answers: ["Bootstrap", "MongoDB", "Firebase"],
    },
    {
      question: "Which database stores data in JSON-like format?",
      correct_answer: "MongoDB",
      incorrect_answers: ["MySQL", "Oracle", "SQLite"],
    },
    {
      question: "Which symbol selects class in CSS?",
      correct_answer: ".",
      incorrect_answers: ["#", "*", "&"],
    },
    {
      question: "Which symbol selects id in CSS?",
      correct_answer: "#",
      incorrect_answers: [".", "*", "&"],
    },
    {
      question: "Which HTML tag creates heading?",
      correct_answer: "<h1>",
      incorrect_answers: ["<head>", "<title>", "<p>"],
    },
    {
      question: "Which JavaScript keyword creates constant variable?",
      correct_answer: "const",
      incorrect_answers: ["let", "var", "constant"],
    },
    {
      question: "Which operator checks equality in JavaScript?",
      correct_answer: "===",
      incorrect_answers: ["=", "===", "!="],
    },
    {
      question: "Which method converts JSON string into object?",
      correct_answer: "JSON.parse()",
      incorrect_answers: [
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.object()",
      ],
    },
    {
      question: "Which method converts object into JSON string?",
      correct_answer: "JSON.stringify()",
      incorrect_answers: ["JSON.parse()", "JSON.convert()", "JSON.object()"],
    },
    {
      question: "Which JavaScript framework is component based?",
      correct_answer: "React",
      incorrect_answers: ["Bootstrap", "MongoDB", "Express"],
    },
    {
      question: "Which backend framework is lightweight?",
      correct_answer: "Express.js",
      incorrect_answers: ["Bootstrap", "React", "HTML"],
    },
    {
      question: "Which database query language is used in MySQL?",
      correct_answer: "SQL",
      incorrect_answers: ["HTML", "CSS", "JS"],
    },
    {
      question: "Which tag is used for form creation?",
      correct_answer: "<form>",
      incorrect_answers: ["<input>", "<button>", "<label>"],
    },
    {
      question: "Which input type hides typed password?",
      correct_answer: "password",
      incorrect_answers: ["text", "hidden", "secure"],
    },
    {
      question: "Which HTML attribute specifies image path?",
      correct_answer: "src",
      incorrect_answers: ["href", "alt", "link"],
    },
    {
      question: "Which CSS property changes font size?",
      correct_answer: "font-size",
      incorrect_answers: ["font-color", "text-style", "size"],
    },
    {
      question: "Which JavaScript loop runs fixed times?",
      correct_answer: "for loop",
      incorrect_answers: ["while loop", "do-while", "foreach"],
    },
    {
      question: "Which operator combines strings in JavaScript?",
      correct_answer: "+",
      incorrect_answers: ["&", "*", "%"],
    },
    {
      question: "Which method adds element at array end?",
      correct_answer: "push()",
      incorrect_answers: ["pop()", "shift()", "remove()"],
    },
    {
      question: "Which method removes last array element?",
      correct_answer: "pop()",
      incorrect_answers: ["push()", "shift()", "append()"],
    },
    {
      question: "Which service hosts full stack applications?",
      correct_answer: "Render",
      incorrect_answers: ["Photoshop", "Excel", "Canva"],
    },
    {
      question: "Which keyword handles errors in JavaScript?",
      correct_answer: "catch",
      incorrect_answers: ["except", "error", "handle"],
    },
    {
      question: "Which statement handles exceptions?",
      correct_answer: "try-catch",
      incorrect_answers: ["if-else", "switch", "loop"],
    },
    {
      question: "What is Full Stack Developer responsible for?",
      correct_answer: "Frontend and Backend",
      incorrect_answers: ["Database only", "Frontend only", "Backend only"],
    },
  ],
};

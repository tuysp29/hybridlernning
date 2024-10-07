<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ชุดการเรียนรู้แบบไฮบริด</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
        }

        .login-container {
            background-color: white;
            max-width: 400px;
            margin: 100px auto;
            padding: 2rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .login-container h2 {
            margin-bottom: 1.5rem;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            padding: 0.5rem 1rem;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #555;
        }

        .welcome-container {
            text-align: center;
            padding: 2rem;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>ชุดการเรียนรู้แบบไฮบริด รายวิชาการเขียนแบบเครื่องจักรกล</h1>
    </header>

    <div class="login-container" id="loginForm">
        <h2>เข้าสู่ระบบ</h2>
        <input type="text" id="username" placeholder="ชื่อ-นามสกุล">
        <input type="password" id="password" placeholder="รหัสนักศึกษา">
        <button onclick="login()">เข้าสู่ระบบ</button>
    </div>

    <div class="welcome-container" id="welcomeMessage" style="display: none;">
        <h2>ยินดีต้อนรับเข้าสู่ ชุดการเรียนรู้แบบไฮบริด รายวิชาการเขียนแบบเครื่องจักรกล</h2>
        <p>ขอให้คุณสนุกกับการเรียนรู้!</p>
    </div>

    <footer>
        <p>&copy; 2024 รายวิชาการเขียนแบบเครื่องจักรกล. All rights reserved.</p>
    </footer>

    <script>
        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // ตรวจสอบว่าใส่ข้อมูลครบถ้วนหรือไม่
            if (username === "" || password === "") {
                alert("กรุณากรอกชื่อ-นามสกุล และรหัสนักศึกษา");
            } else {
                // ซ่อนฟอร์มล็อคอิน
                document.getElementById("loginForm").style.display = "none";

                // แสดงข้อความต้อนรับ
                document.getElementById("welcomeMessage").style.display = "block";
            }
        }
    </script>
</body>
</html>

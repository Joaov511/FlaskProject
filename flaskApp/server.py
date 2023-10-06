from flask import Flask, jsonify,request
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL

app = Flask(__name__)

mysql = MySQL(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'flask'

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
    
@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def checkUserData():
    email = request.get_json()['email']
    password = request.get_json()['password']
    
    cursor = mysql.connection.cursor()
    cursor.execute(f'select * from user where email="{email}" and password="{password}";')
    data = cursor.fetchone()
    mysql.connection.commit()
    cursor.close()

    if data is None:
        userExists = False
    else:
        userExists = True
    
    return jsonify(UserExists = userExists)
    

@app.route('/signup', methods=['POST'])
@cross_origin(supports_credentials=True)
def AddNewUser():
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = request.get_json()['password']

    cursor = mysql.connection.cursor()
    cursor.execute(f'insert into user(username,email,password) values("{username}","{email}","{password}")')
    mysql.connection.commit()
    cursor.close()
    
    return jsonify(user = True)\



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3085)



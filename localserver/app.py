from flask import Flask, render_template, request, flash, jsonify
import json
import openpyxl

app = Flask(__name__)
app.secret_key = Flask.secret_key
app.config["TEMPLATES_AUTO_RELOAD"] = True

class Counter:
    def __init__(self): 
        self.counter = 1
    def update(self):
        self.counter += 1
        return self.counter
    def getCount(self):
        return self.counter

count = Counter()


@app.route("/input", methods=["GET", "POST"])
def index():
    global count
    if request.method == "POST":
        message = request.form.get("message")
        myFile = open("yolo.txt", "a")
        myFile.write(message + "\n")
        flash("Inputted: " + message)
    q = request.args.get("q")
    if(q):
        wb = openpyxl.load_workbook("remember.xlsx") 
        sheet = wb.active
        index = "A" + str(count.update())
        sheet[index] = q
        wb.save("remember.xlsx")
        print(count.getCount())
        return jsonify(txt=q)
    return render_template("index.html")


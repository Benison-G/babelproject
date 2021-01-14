"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student = /*#__PURE__*/function () {
  function Student(fname, lname, age, address) {
    _classCallCheck(this, Student);

    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = address;
  }

  _createClass(Student, [{
    key: "fullname",
    get: function get() {
      return this.fname + "-" + this.lname;
    }
  }]);

  return Student;
}(); // const compile using babel


var a = 1;

if (a == 1) {
  var _age = 10;
}

console.log(age); // let compile using babel

if (a == 1) {
  var _a = 2;
  console.log(_a);
}

console.log(a);

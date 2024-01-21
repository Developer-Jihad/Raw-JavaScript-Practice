let object = {
  insName: "As-Sunnah Foundation",
  courseList: ["HTML", "CSS", "JavaScript", "React"],
  printCourseInfo: function () {
    this.courseList.forEach(
      function (value, i, array) {
        if (i < 1) {
          console.log(`${this.insName} made ${array} courses`);
        }
      }.bind(this)
    );
  },
};
object.printCourseInfo();


/* let object = {
  insName: 'As-Sunnah',
  courses: ['Html', 'CSS', 'JavaScript', 'React'],
  printInfo: function(){
    this.courses.forEach((v, i, a) => {
      if(i<1){
        console.log(`${this.insName} made ${a} conmbind course`);
      }
    });
  }
}
object.printInfo(); */

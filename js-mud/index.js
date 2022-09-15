let goga = {
  birthDate: { year: 1970, month: 3, day: 2 },
  getAge() {
    let now = new Date();

    let born = new Date(
      this.birthDate.year,
      this.birthDate.month + 1,
      this.birthDate.day
    );

    let diffInMilliseconds = now.getTime() - born.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  }
}

console.log(goga.getAge());

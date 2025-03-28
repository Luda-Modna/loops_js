
//1
class Post {
  constructor(id, title, author, text, datePosted, likes = 0, hashtags) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.datePosted = datePosted;
    this.likes = likes;
    this.hashtags = hashtags;
  }
  changeText(newText) {
    this.text = newText;
  }
  addLikes() {
    this.likes += 1;
  }
  dislikes() {
    if (this.likes > 0) {
      this.likes -= 1;
    }
  }

  set hashtags(value) {
    const VALID_NAME_HASHTAGS = [
      "#author",
      "#bookUa",
      "#biography",
      "#post",
      "#Kostenko",
      "#life",
      "#web",
      "#javascript",
    ];

    const validTag = value.filter(
      (value) => !VALID_NAME_HASHTAGS.includes(value)
    );

    if (validTag.length > 0) {
      throw new RangeError("invalid hashtag name");
    }
    if (value.length > 6) {
      throw new RangeError("hashtag no more than 6");
    }
    
    this._hashtags = value;
  }

  get hashtags() {
    return this._hashtags;
  }

  set likes(value) {
    if (value < 0) {
      throw new RangeError("The number of likes can't be negative");
    }
    if (typeof value !== "number") {
      throw new TypeError("The likes must be a number");
    }
    this._likes = value;
  }

  get likes() {
    return this._likes;
  }

  render() {
    const { title, author, text, datePosted, likes, hashtags } = this;
    document.write(` 
    <article>
        <h2> ${author} </h2>
        <h3>${title}</h3>
        <p>${text}</p>
        <p>Date of publication - ${datePosted}</p>
        <p>Likes - ${likes}</p>
        <p>${hashtags}</p>
    </article> 
    `);
  }
}

try {
  const userPost = new Post(
    1,
    "My life",
    "Lina Kostenko",
    "Biography",
    "2024-03-15",
    1008,
    ["#post", "#author", "#biography", "#post", "#Kostenko", "#life"]
  );
  userPost.render();
  console.log(userPost);
} catch (err) {
  console.log(err);
}


//2
class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  isValid(num) {
    return num >= 5 && num <= 80;
  }

  set from(number) {
    if (typeof number !== "number") {
      throw new TypeError("from NaN");
    }
    if (number > this.to) {
      throw new RangeError("from must be small to");
    }
    if (number < 0) {
      throw new RangeError("number must not be lower than zero");
    }
    this._from = number;
  }

  get from() {
    return this._from;
  }

  set to(number) {
    if (typeof number !== "number") {
      throw new TypeError("to NaN");
    }
    if (number < this.from) {
      throw new RangeError("to must be bigger from");
    }
    if (number < 0) {
      throw new RangeError("number must not be lower than zero");
    }
    this._to = number;
  }

  get to() {
    return this._to;
  }
}

try {
  const range1 = new RangeValidator(1, 5.5);
  range1.from = 5;
  //range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)
  range1.to = 80;
  // range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from
  console.log(range1.from); // => 5
  console.log(range1.to); // => 80
  console.log(range1.isValid(10)); // => true (оскільки належить діапазону [5, 80])
  console.log(range1.isValid(100)); // => false (оскільки не належить діапазону [5, 80])
} catch (err) {
  console.log(err);
}

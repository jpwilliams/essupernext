# essupernext
ES2018 a.k.a. "ESSuper-Next". Dot-syntax and keyword conversion.

[![ES2018 First Look - it changes everything](http://i.imgur.com/Nr4MYev.png)](https://youtu.be/s-G_RZ4RJLU "ES2018 First Look - it changes everything")

Handy DIY compiler for dot syntax to get your code ready for ES2018.

### Usage

``` js
npm install -g essupernext
essupernext index.js
```

### Example output

(_GitHub, stupidly, doesn't support proper highlighting for ES2018, so this will look off. Still tonnes more readable though!_)

``` js
c joi . require.'joi'.
c commentsDb . require.'connection-mongo'..'comments'.
c ObjectId . require.'connection-mongo'..ObjectId
c remit . require.'connection-remit'.
c log . require.'connection-logger'.
c validate . require.'service-helpers'..remit. log..validate

m.exports . .. .. .
  remit.res.'comments.create'. .
    validate.joi.object...keys..
      user: joi.string...trim...regex./^.0-9a-fA-F..24.$/..required...
      content: joi.string...trim...regex./^.0-9a-fA-F..24.$/..
      task: joi.string...trim...regex./^.0-9a-fA-F..24.$/..
      comment: joi.string...trim...required..
    ...xor.'content'. 'task'...

    createComment
  ..
.

f createComment .args. done. .
  l doc . .
    user: ObjectId.args.parsed.user..
    comment: args.parsed.comment
  .

  if .args.parsed.content. .
    doc.content . ObjectId.args.parsed.content.
  . else .
    doc.task . ObjectId.args.parsed.task.
  .

  commentsDb
    .collection.'comments'.
    .insertOne.doc. .err. result. .. .
      if .err. .
        log.error.new E.err..

        r done.err.
      .

      if .result.insertedCount. .
        remit.emit.'comments.created'. result.ops.0..
      .

      r done.null. result.ops.0..
    ..
.
```

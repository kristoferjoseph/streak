let body = `
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
   :root {
      --hot-magenta:#AF3A83;
      --hot-salmon:#FF7174;
      --yellow:#FFEB28;
      --grey:#ECEDEE;
      --white: #FFFFFF;
   }
   *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html,
    body {
      height: 100%;
    }
    body {
      padding: 4rem;
      font-family: "Gibson","HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: normal;
    }
    img {
      max-width: 100%;
    }
    .color-hot-salmon{color:var(--hot-salmon)}
    .color-yellow{color:var(--yellow)}
    .color-white{color:var(--white)}
    .background-color-grey {
      background-color: var(--grey);
    }
    span {
      box-shadow: 0 0 0 10px #fff
      background-color: #fff
      box-decoration-break: clone # Fix Firefox
      line-height: 2.2
    }
    .halftone {
      background-image:
        radial-gradient(
          circle,
          #333 25%,
          transparent 0
        );
        background-size: 0.25rem 0.25rem;
        background-repeat: repeat;
    }
    .subheading {
      transform: skew(-20deg, 0);
      font-size:3rem;
      line-height: 1.2;
      color:#FFEB28;
      text-shadow:
        -1px -1px var(--hot-magenta),
        1px 1px #AF3A83,
        2px 2px #D85FA0,
        3px 3px #D85FA0,
        4px 4px #D85FA0,
        5px 5px #D85FA0,
        6px 6px #D85FA0,
        7px 7px #D85FA0,
        8px 8px #D85FA0,
        9px 9px #D85FA0,
        10px 10px #D85FA0,
        11px 11px #D85FA0,
        12px 12px #D85FA0,
        13px 13px #D85FA0,
        14px 14px #D85FA0,
        15px 15px #D85FA0;
      }
</style>
<link rel="stylesheet" href="//kristoferjoseph.com/font/bold.css">
<link rel="stylesheet" href="//kristoferjoseph.com/font/regular.css">
<link rel="stylesheet" href="//kristoferjoseph.com/font/light-italic.css">
</head>
<body
  class="
    halftone
    background-color-grey
  "
  style="
    overflow: hidden;
  "
>
<section
  style="
    position: relative;
    margin-bottom: 4rem;
  "
>
  <div>
    <h1
      style="
        transform: skew(-20deg, 0);
        font-size:5rem;
        line-height: 0.75;
        color:#FF7174;
        text-shadow:
          1px 1px #ECEDEE,
          2px 2px #AF3A83,
          3px 3px #AF3A83,
          4px 4px #AF3A83,
          5px 5px #AF3A83,
          6px 6px #AF3A83,
          7px 7px #AF3A83,
          8px 8px #AF3A83,
          9px 9px #AF3A83,
          10px 10px #AF3A83,
          11px 11px #AF3A83,
          12px 12px #AF3A83,
          13px 13px #AF3A83,
          14px 14px #AF3A83,
          15px 15px #AF3A83;
      "
    >
      Kristofer Joseph
    </h1>
    <h3
      style="
      "
      class="
        subheading
      "
    >
      Web Dude
    </h3>
  </div>
  <div
    style="
      position: absolute;
      top: -17rem;
      clip-path: polygon(100% 35%, -43% 183%, 37% 100%, 0 45%);
      background-color:#56aac0;
      width: 40rem;
      height: 40rem;
      z-index: -1;
    "
    class="halftone"
  >
  </div>
  <p
    class="
      color-white

    "
    style="
      position: absolute;
      top: -5rem;
      left: 12rem;
      font-weight:900;
      font-size:27rem;
      z-index: -1;
    "
  >
  </p>
</section>
<p
  style="
    font-size:1.25rem;
    font-weight:100;
    background:white;
  "
>
  <span>Dolor temporibus vitae rem tenetur porro laborum!</span> <span>Tenetur aliquam suscipit voluptate officia sequi Fugit molestias accusamus nam laboriosam delectus?</span> <span>Ducimus perferendis nihil explicabo error distinctio!</span> <span>Voluptates architecto tempora ipsum cupiditate</span>
</p>
</body>
</html>
`

exports.handler = async function http(req) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}

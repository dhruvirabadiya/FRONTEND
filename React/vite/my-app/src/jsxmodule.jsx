//1. Return a single root element
// 2. Close all the tags
// 3. camelCase all most of the things!
//Challange solve
export default function Bio() {
  return (
    <>
      <div class="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p class="summary">
        You can find my thoughts here.
        <br></br>
        <b>
          And <i>pictures</i>{" "}
        </b>
        of scientists!
      </p>
    </>
  );
}

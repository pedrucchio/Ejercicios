export function MouseClicker() {
  function handleClick(event) {
    console.log(event.currentTarget.name);
  }

  function handleImageClick(e) {
    e.stopPropagation();
    console.log(e.currentTarget.src);
  }

  return (
    <div>
      <button name="one" onClick={handleClick}>
        <img onClick={handleImageClick} id="imagen" width={24} height={24} src="https://gizmodo.com.au/wp-content/uploads/2023/01/25/google-reverse-image-search.png"/>
        Click Here!
      </button>
    </div>
  );
}

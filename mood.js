window.onload = function () {
  document.querySelector("#mood1")
    .addEventListener("click", function () {
      store.dispatch({ type: "BEAR" })
      const currentMood = store.getState().mood
      document.querySelector("#container").innerText = currentMood
    })

  document.querySelector("#mood2")
    .addEventListener("click", function () {
      store.dispatch({ type: "FLIP_TABLE" })
      const currentMood = store.getState().mood
      document.querySelector("#container").innerText = currentMood
    })
}
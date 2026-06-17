<!DOCTYPE html>
<html>
<head>
  <title>Farmer Upload</title>
</head>
<body>

<h2>Farmer Upload Herb</h2>

<input id="name" placeholder="Herb name"><br>
<input id="location" placeholder="Location"><br>
<input id="quantity" placeholder="Quantity"><br>
<button onclick="addHerb()">Submit</button>

<script>
async function addHerb() {
  await fetch("https://YOUR_BACKEND_URL/addHerb", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      location: document.getElementById("location").value,
      quantity: document.getElementById("quantity").value
    })
  });

  alert("Herb Added!");
}
</script>

</body>
</html>

# Namaste React ❤

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithim
- Caching = Faster Build
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistant Hashing
- Code Splitting
- Differential Bundling = To support older browser as well
- Better Error Suggestions
- HTTPs
- Tree Shaking = Remove unuse code
- Better Diagnostics
- Different DEV and prod bundel

# React Hooks
- React hooks is normal JS function with some super power
- useState() & useEffect() are the most used 2 hooks
- useState() & useEffect() we have to import as nammed import
- useState() we will use to create state variable inside a component | const[listofrest, setlistofrest] = useState([]); is the syntax to create state variable. | In useState variable we have to pass 2 argument [listofrest, setlistofrest], first one will contain the initial value and the secod one will update the first one whenever there is any changes in data. | Whenever the value of state variable changes react will re render the UI as per new data.
- Reconciliation Algorithim/React Fiber

# First Round
- Episode 7

# Revise
- Episode 6 - 1 H 37 M

- <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTML Table with Checkbox (Session Storage)</title>
</head>
<body>

<table border="1">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2 (Checkbox)</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span id="column1_1">Data 1</span></td>
      <td><input type="checkbox" class="test_class" onchange="updateColumnValue(this)" id="checkbox_1"></td>
      <td>Data 3</td>
    </tr>
  </tbody>
</table>

<script>
  // Function to update checkbox state based on session storage
  window.onload = function() {
    var checkboxes = document.querySelectorAll('input[class="test_class"]');
    var checkboxArray = Array.from(checkboxes);
    for (var i = 0; i < checkboxArray.length; i++) {
      var checkbox = checkboxArray[i];
      var state = sessionStorage.getItem(checkbox.id);
      if (state === 'checked') {
        checkbox.checked = true;
        updateColumnValue(checkbox);
      } else {
        checkbox.checked = false;
      }
    }
  };

  function updateColumnValue(checkbox) {
    var tableRow = checkbox.closest('tr'); // Find the parent row of the checkbox
    var rowIndex = tableRow.rowIndex; // Get the row index
    var firstColumnSpan = document.getElementById('column1_' + rowIndex); // Get the span in the first column
    if (checkbox.checked) {
      firstColumnSpan.textContent = "Checkbox Checked";
      sessionStorage.setItem(checkbox.id, 'checked');
      console.log("State value: checked");
    } else {
      firstColumnSpan.textContent = "Data " + rowIndex; // Reset the column 1 value
      sessionStorage.setItem(checkbox.id, 'unchecked');
      console.log("State value: unchecked");
    }
  }
</script>

</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Change Paragraph Value on Checkbox Checked (with Session Storage)</title>
</head>
<body>

<input type="checkbox" id="checkbox_1" onchange="updateParagraphValue(this)">
<label for="checkbox_1">Toggle Paragraph</label>

<p id="paragraph">Paragraph Value</p>

<script>
  window.onload = function() {
    var checkbox = document.getElementById('checkbox_1');
    var state = sessionStorage.getItem(checkbox.id);
    if (state === 'checked') {
      checkbox.checked = true;
      updateParagraphValue(checkbox);
    } else {
      checkbox.checked = false;
    }
  };

  function updateParagraphValue(checkbox) {
    var paragraph = document.getElementById('paragraph');
    if (checkbox.checked) {
      paragraph.textContent = "Checkbox Checked";
      sessionStorage.setItem(checkbox.id, 'checked');
    } else {
      sessionStorage.setItem(checkbox.id, 'unchecked');
    }
  }
</script>

</body>
</html>


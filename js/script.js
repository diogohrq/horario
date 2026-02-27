const supabaseUrl = "https://tiblnsckvqrmsgfcskko.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpYmxuc2NrdnFybXNnZmNza2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4OTA5MTUsImV4cCI6MjA4NzQ2NjkxNX0.lIUMV88wGiP34bdjhMhm5mO68U6okQODsGlzKnC9xuw";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  let { data, error } = await supabaseClient.from("horario").select("*");

  if (error) {
    console.error("Error fetching data: ", error);
    return;
  }

  // Remove id
  data = data.map(({id, ...rest }) => rest)
  return data;
}

async function populateTable() {
  const data = await fetchData();
  const tableHeader = document.querySelector('#tbheader')
  const tableBody = document.querySelector("#tbbody")

  for (let i = 0; i <= data.length - 1; i++) {
    const headerRow = document.createElement('tr');
    const bodyRow = document.createElement('tr')
    const headers = Object.keys(data[0])

    // Table Header
    if (i == 0) {
      headers.forEach(element => {
        const th = document.createElement('th');
        th.textContent = element;
        headerRow.appendChild(th);
      });

      tableHeader.appendChild(headerRow)
    }

    dataRow = Object.values(data[i])
    dataRow.forEach(item => {
      const td = document.createElement('td')
      td.textContent = item
      bodyRow.appendChild(td)
    })

    tableBody.appendChild(bodyRow)
  }
}

function createTableHeader(data) {

}

function createTableBody(data) {

}

populateTable()

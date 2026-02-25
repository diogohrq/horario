const supabaseUrl = "https://tiblnsckvqrmsgfcskko.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpYmxuc2NrdnFybXNnZmNza2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4OTA5MTUsImV4cCI6MjA4NzQ2NjkxNX0.lIUMV88wGiP34bdjhMhm5mO68U6okQODsGlzKnC9xuw";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const table = document.getElementsByClassName("tb");

function populateTable(table, data) {}

async function getData() {
  const { data, error } = await supabaseClient.from("horario").select("*");

  if (error) {
    console.error("Error fetching data: ", error);
    return;
  }

  data.forEach((element) => {
    console.log(element);
    console.log(table);
  });
}

getData();

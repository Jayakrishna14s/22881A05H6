import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcmlzaG5hOTUwMjIwMjQ5MUBnbWFpbC5jb20iLCJleHAiOjE3NTM2ODcwNzQsImlhdCI6MTc1MzY4NjE3NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjkzMjY5ZTg5LWFlODMtNDUzMi1hMWJiLTM1OGE3ZTkxN2M1ZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImpheWFrcmlzaG5hIiwic3ViIjoiNDQ5Zjc5ZmItMzljYS00ZWVhLWJiZGQtYTExZWJmYjBlNTU1In0sImVtYWlsIjoia3Jpc2huYTk1MDIyMDI0OTFAZ21haWwuY29tIiwibmFtZSI6ImpheWFrcmlzaG5hIiwicm9sbE5vIjoiMjI4ODFhMDVoNiIsImFjY2Vzc0NvZGUiOiJ3UEVmR1oiLCJjbGllbnRJRCI6IjQ0OWY3OWZiLTM5Y2EtNGVlYS1iYmRkLWExMWViZmIwZTU1NSIsImNsaWVudFNlY3JldCI6Ik53Q1RWVmpDQlh6TmVHZ04ifQ.7BSgrRtOvcYgHo60Od-bDz6mM11FW3-v8kX-fBNBuFU";
const TEST_SERVER_API = "http://20.244.56.144/evaluation-service/logs";

async function isImportant(body) {
  return true;
}

async function Logger(body) {
  console.log(body);

  if (await isImportant(body)) {
    const response = await axios.post(TEST_SERVER_API, JSON.stringify(body), {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    console.log(response.data);
  }
}

export default Logger;

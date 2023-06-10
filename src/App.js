import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
// import Bar from "./scenes/bar"
// import Form from "./scenes/form"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import FAQ from "./scenes/faq"
// import Geography from "./scenes/geography"
// import Calendar from "./scenes/calendar"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />

            <Routes>
              <Route exact path="/" element={<Dashboard />}></Route>
              <Route exact path="/team" element={<Team />}></Route>
              <Route exact path="/invoices" element={<Invoices />}></Route>
              <Route exact path="/contacts" element={<Contacts />}></Route>
              {/* <Route exact path="/bar" element={<Bar />}></Route> */}
              {/* <Route exact path="/form" element={<Form />}></Route> */}
              {/* <Route exact path="/line" element={<Line />}></Route> */}
              {/* <Route exact path="/pie" element={<Pie />}></Route> */}
              {/* <Route exact path="/faq" element={<FAQ />}></Route> */}
              {/* <Route exact path="/geography" element={<Geography />}></Route> */}
              {/* <Route exact path="/calendar" element={<Calendar />}></Route> */}
            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

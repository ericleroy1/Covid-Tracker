import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVID Tracker</h1>
      </header>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="profile" title="Vaccine Data">
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="contact" title="Worsening">
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="contact" title="Improving">
          {/* <Sonnet /> */}
        </Tab>
      </Tabs>

        <form>
          <label>
            Search country:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

    <DataTable />

    </div>
  );
}

export default App;

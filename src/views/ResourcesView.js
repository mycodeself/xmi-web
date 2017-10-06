import React from 'react'
import {Nav, NavItem, NavLink, TabContent} from 'reactstrap'
import classnames from 'classnames';
import Layout from "../components/Layout";
import VideosTab from "../components/VideosTab";
import StudiesTab from "../components/StudiesTab";
import InformationTab from "../components/InformationTab";



class ResourcesView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Layout title="Recursos">
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Videos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Estudios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Información
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <VideosTab/>
            <StudiesTab/>
            <InformationTab/>
          </TabContent>
        </div>
      </Layout>
    )
  }
}

export default ResourcesView
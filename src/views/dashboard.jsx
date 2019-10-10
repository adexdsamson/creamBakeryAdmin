import React, { Component } from 'react';
import { AnnouncementCard } from '../components/Cards';
import Page from '../components/Page';
import {
  Bar,
  Line
} from 'react-chartjs-2';
import { getStackLineChart, stackLineChartOptions } from '../components/Chart';
import {
  MdInsertChart
} from 'react-icons/md';
import {
  Card,
  Col,
  Row,
} from 'react-bootstrap';


class Dashboard extends Component {
  state = {  }
  render() { 
    return ( 
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
        <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Bar
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [0, 13000, 5000, 24000, 16000, 25000, 10000],
                })}
                options={stackLineChartOptions}
              />
              <Card.Body
                className="text-primary"
                style={{ position: 'absolute' }}
              >
                <Card.Title>
                  <MdInsertChart /> Sales
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [10000, 15000, 5000, 10000, 5000, 10000, 10000],
                })}
                options={stackLineChartOptions}
              />
              <Card.Body
                className="text-primary"
                style={{ position: 'absolute' }}
              >
                <Card.Title>
                  <MdInsertChart /> Revenue
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [0, 13000, 5000, 24000, 16000, 25000, 10000].reverse(),
                })}
                options={stackLineChartOptions}
              />
              <Card.Body
                className="text-primary"
                style={{ position: 'absolute', right: 0 }}
              >
                <Card.Title>
                  <MdInsertChart /> Profit
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
                
        
        <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-announcement"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
              date="1 hour ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>
        </Row>



      </Page>
     );
  }
}
 
export default Dashboard;
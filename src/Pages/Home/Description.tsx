import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TEXT = [
  "Out pack fly live package includes lpsum dolor sit amet, consectetur adipiscing elit. Vivamus ex ante, tristique sed elit id, scelerisque scelerisque risus. Nulla malesuada suscipit vehicula. Vestibulum mauris purus, malesuada eget laoreet et, mattis eu purus. Sed arcu enim, rhoncus non porta eu, finibus sed erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vitae nisi vel ornare. Cras velit neque, tincidunt et purus eu, semper dignissim risus. Quisque gravida interdum ipsum ac dignissim. Aenean fringilla libero leo, vitae varius magna convallis vel. Morbi luctus ligula erat, vitae pulvinar nunc pretium nec. Integer id facilisis nibh. In porta at tellus eget consectetur. Vestibulum nisl nunc, euismod a aliquet sit amet, fermentum in massa. ",
  "Nunc quis eros facilisis, sagittis ex vitae, mattis sapien. Duis feugiat dictum vehicula. Nullam vestibulum tellus nisi, eu euismod velit finibus et. Aliquam id risus non sem pulvinar pulvinar in quis tellus. Pellentesque eget ipsum dignissim, molestie est vitae, tincidunt elit. Pellentesque suscipit, magna ac molestie luctus, magna massa placerat purus, in dictum urna dui vel massa. Curabitur eget est felis. Morbi eleifend libero a turpis sollicitudin aliquet. ",
  "Aliquam id risus non sem pulvinar pulvinar in quis tellus. Pellentesque eget ipsum dignissim, molestie est vitae, tincidunt elit. Pellentesque suscipit, magna ac molestie luctus, magna massa placerat purus, in dictum urna dui vel massa. Curabitur eget est felis. Morbi eleifend libero a turpis sollicitudin aliquet. ",
];

const Description: FC = () => {
  return (
    <Container>
      <Row lg={2} sm={1} md={1} xs={1}>
        <Col lg={8}>
          <Row>
            <div style={{ fontSize: "30px", padding: 0, marginBottom: "13px" }}>
              <b>P</b>FL package
            </div>
          </Row>
          <Row>
            <div
              style={{
                height: "1px",
                backgroundColor: "#3A424E",
                maxWidth: "80%",
                marginBottom: "35px",
              }}
            ></div>
          </Row>
          <Row>
            {TEXT.map((value) => (
              <p style={{ padding: "0", fontSize: "15px" }}>{value}</p>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;

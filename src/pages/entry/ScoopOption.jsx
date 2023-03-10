import Col from 'react-bootstrap/Col'

const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col xs={6} sm={4} lg={2} style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: '75%' }}
      />
    </Col>
  )
}

export default ScoopOption

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { useOrderDetails } from '../../contexts/OrderDetails'

const ScoopOption = ({ name, imagePath }) => {
  const { updateItemCount } = useOrderDetails()
  const handleChange = (e) =>
    updateItemCount(name, parseInt(e.target.value), 'scoops')

  return (
    <Col xs={6} sm={4} lg={2} style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: '75%' }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs='6' style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs='5' style={{ textAlign: 'left' }}>
          <Form.Control
            type='number'
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  )
}

export default ScoopOption

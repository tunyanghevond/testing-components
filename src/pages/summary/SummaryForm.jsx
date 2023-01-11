import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const SummaryForm = () => {
  const [toChecked, setToChecked] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={toChecked}
          onChange={(e) => setToChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>

      <Button variant='primary' type='submit' disabled={!toChecked}>
        Confirm order
      </Button>
    </Form>
  )
}

export default SummaryForm

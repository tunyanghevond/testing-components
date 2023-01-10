import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SummaryForm = () => {
  const [toChecked, setToChecked] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const checkboxLabel = (
    <span>
      <span style={{ color: 'blue' }}>Terms and Conditions</span>
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

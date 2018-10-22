import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonComponent from './ButtonComponent'

storiesOf('Button', module)
  .add('Ugly but correct button', () => (
    <ButtonComponent
      buttonText='some text for button'
      handleClick={action('clicked')}
    />
  ))

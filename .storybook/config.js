import React from 'react'
import { configure, addDecorator } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <div style={{ margin: '20px auto'}}>
    {story()}
  </div>
))

configure(loadStories, module)

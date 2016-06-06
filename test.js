import remark from 'remark'
import test from 'ava'

import plugin from './'

function run (t, input, output, opts = { }) {
  return remark([ plugin(opts) ]).process(input)
    .then(result => {
      t.deepEqual(result.css, output)
      t.deepEqual(result.warnings().length, 0)
    })
}

test('Test name', t => {
  return run(t, '[Twitter](https://twitter.com)', '<a href="https://twitter." +
  "com" tagret="_blank">Twitter</a>', { })
})

SDK for posting datapoints to TechBy Impact

Basic usage:
```
import { Impact } from '@techby/impact'

const impact = new Impact({
  apiKey: '<your api key>'
})

impact.incrementMetric('users')
impact.incrementUnique('active-users', 'some-hashed-user-id)
```
Maxwell Front End Interview App
====================

1. Clone this repo into your github account by clicking "Use this Repo" button. 
2. Follow the instructions below and when you are finished, **submit a PR to your repository, not this one**. 

# Ruby on Rails

This application requires:

- Rails 5.1.6

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

# Getting Started

Run the following commands:

```
bundle
bundle exec rake db:create
bundle exec rake db:migrate
yarn install
bundle exec rake db:seed
```

# Running The Application

```
foreman start -f Procfile.dev -p 3000
```

You will see the more information and details for the exercise at `http://localhost:3000`


Tips and best practices
====================
### Submission
Submit a PR **to your repository, not this one**.  

### Make commits incrementally
Please do not squash commit before submission. We want to see incremental commits.

### Branch name
When you work on any exercise, choose a branch name that you think would make sense to you.

### How to approach the problem
Approach this problem as if it is an application going to production. We don't expect it to be perfect (no production code is). This should be representative of something that you would be comfortable releasing to a production environment.

Also, spend whatever amount of time you think is reasonable. You may use whatever libraries, frameworks and tools that you think are appropriate, just provide any special setup instructions when you submit your solution.

You will not get any extra points for solving the challenge fast. Speed of delivery is not what we are looking for in this challenge.

We are looking for you to demonstrate your knowledge related to common software practices to include reusability, portability and encapsulation - to name a few.

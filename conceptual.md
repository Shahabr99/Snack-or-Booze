### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router allows to map different URLs to different components, enabling the creation of single page application.

- What is a single page application?
A Single Page Application(SPA) is a web application or website that operates within a single web page. In te traditional webpages 
clicking on a link will result in fetching a page from the server and a complete reload on the page but an SPA will load a single 
HTML page and dynamically update the content as the user interacts with the application.

- What are some differences between client side and server side routing?
The difference is with Client-side routing, the URL in the webpage can change but it doesn't trigger a full page reload.

- What are two ways of handling redirects with React Router? When would you use each?
using two components of Navigate  and useNavigate from React Router DOM.
We can use Navigate when we don't want the user to go back to a route that results in 404 status code.
We can use useNavigate to redirect the use to any route and the user can go back to the old route.

- What are two different ways to handle page-not-found user experiences using React Router?
One way would be redirecting the user to the home page.
Second way is to use stop the use from reaching to any other route that are not defined and displaying a 404 pae. 

- How do you grab URL parameters from within a component using React Router?
By using a React hook called useParams.

- What is context in React? When would you use it?
Context allows us to have data available in an entire application hierarchy. Therefore, data
can be available to any component without having to pass it down through props.

- Describe some differences between class-based components and function
  components in React.
  The need fo using the 'this' keyword in class components.
  difficulty sharing code between components in class components.
  The is managed by 'this.state' while useState hook manages state in functional components.
  the syntax for components is just a class in JavaScript and we need to use 'render' method 
  to return the component's structure.

- What are some of the problems that hooks were designed to solve?
The hooks can help with managing state , passing codes in different components, data fetching, and more.
using class components would make things so complicated because of using the 'this' keyword and using 'bind' method.
With hooks we cna control state easier and we can use useEffect instead of using all of the life cycle methods.
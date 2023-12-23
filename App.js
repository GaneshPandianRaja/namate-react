
/**
 * 
 * <div>
 *   <div> 
 *    <h1> Content 1 </h1>
 *   </div>
 * 
 *   <div>
 *    <h1> Content 1 </h1>
 *   </div>
 * </div>
 * 
 */


const containerElement = React.createElement('div', {id: 'parent'}, 
[React.createElement('div', { id: 'child-1'}, 
React.createElement('h1', {}, 'Content 1')), 
React.createElement('div', { id: 'child-2'}, 
React.createElement('h1', {}, 'Content 2'))]);
console.log(containerElement);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerElement);
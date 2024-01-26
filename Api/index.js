async function getAndFilterPostsByTitle(title) {
    try {
      // Fetch posts from the mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Check if the response status is OK
      if (!response.ok) {
        throw new Error(`Failed to fetch posts. Status: ${response.status}`);
      }
  
      // Parse the response into JSON
      const posts = await response.json();
  
      // Filter posts based on the provided title
      const filteredPosts = posts.filter(post => post.title.includes(title));
      console.log(filteredPosts);
        
      return filteredPosts;
    } catch (error) {
      // Handle-errors
      console.error('Error fetching or filtering posts:', error);
      throw error;
    }
  }
  
  // GIvenTitle
  const titleToFilter = 'magnam';
  getAndFilterPostsByTitle(titleToFilter);
  
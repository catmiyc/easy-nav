import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'fye55lse1n75',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  //get projects from contentful
  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: 'projects' });
      const projects = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response.items))
//   .catch(console.error);

export default useFetchProjects;

import { useFetch } from '#imports';

export const handleSubmit = async (username, email, motDePasse) => {
  const { data, error } = await useFetch('/api/inscription', {
    method: 'POST',
    body: {
      username,
      email,
      motDePasse,
    },
  });

  if (error.value) {
    console.error('Error registering user:', error.value);
  } else {
    console.log('User registered successfully:', data.value);
  }
};
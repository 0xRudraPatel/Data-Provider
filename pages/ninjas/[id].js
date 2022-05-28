import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas = await res.json();

  const paths = ninjas.map((ninja) => ({
    params: { id: ninja.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>{`Data Hub Ninja | ${ninja.name}`}</title>
      </Head>
      <div>
        <h2>Personal Details</h2>
        <h3>{ninja.name}</h3>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>
          {ninja.address.suite}, {ninja.address.street}, {ninja.address.city}
          <br /> {ninja.address.zipcode}
        </p>
        <p>{ninja.phone}</p>
      </div>
      <div>
        <h2>Workplace Details</h2>
        <h3>{ninja.company.name}</h3>
        <p>{ninja.company.catchPhrase}</p>
        <p>{ninja.company.bs}</p>
      </div>
    </>
  );
};

export default Details;

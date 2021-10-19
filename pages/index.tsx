import { GetServerSideProps } from "next";

export type PagesProps = {
  first: string;
};

function Pages({ first }: PagesProps) {
  return (
    <div>
      <p>{first}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PagesProps> = async () => {
  return {
    props: {
      first: "home",
    },
  };
};

export default Pages;

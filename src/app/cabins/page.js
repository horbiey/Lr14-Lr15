import Navigation from "../components/Navigation";
import Counter from "../components/Counter";

export const metadata = {
  title: "Cabins | The Wild Oasis",
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="px-8 py-6">
      <Navigation />
      <h1 className="text-3xl mt-6 mb-4">Cabins (test data)</h1>
      {users.map((user) => (
        <div key={user.id} className="border-b border-primary-700 py-2">
          <h2 className="text-xl">{user.name}</h2>
        </div>
      ))}
      <Counter totalUsers={users.length} />
    </div>
  );
}

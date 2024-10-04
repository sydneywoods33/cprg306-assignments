import ItemList from './item-list';

export default function Page() {
    return (
        <main >
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>
            <ItemList />
          </div>
        </main>
      );

};
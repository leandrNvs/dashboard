interface ITr {
  img: string;
  name: string;
  status: "pending" | "done" | "canceled";
  date: string;
  amount: string;
}

const Tr = ({ img, name, status, date, amount }: ITr) => {
  const statusColor = {
    pending: "bg-blue-500",
    canceled: "bg-red-500",
    done: "bg-yellow-800",
  };

  return (
    <tr>
      <td className="flex items-center gap-2">
        <img className="h-8 w-8 rounded-full object-cover" src={img} alt="" />
        {name}
      </td>
      <td>
        <span className={`${statusColor[status]} p-1 text-xs rounded-md`}>
          {status}
        </span>
      </td>
      <td>{date}</td>
      <td>${amount}</td>
    </tr>
  );
};

export default function Table() {
  return (
    <div className="bg-gray-800 mt-4 p-4 rounded-lg">
      <h2 className="text-3xl text-gray-400 my-4">Latest transactions</h2>
      <table className="text-white w-full text-left border-separate border-spacing-y-3">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="pending"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="done"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="done"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="canceled"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="pending"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="canceled"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="pending"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="done"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="done"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="canceled"
            date="14.02.2023"
            amount="3.200"
          />
          <Tr
            img="https://cdn.pixabay.com/photo/2023/11/17/22/49/duck-8395154_960_720.jpg"
            name="John Doe"
            status="pending"
            date="14.02.2023"
            amount="3.200"
          />
        </tbody>
      </table>
    </div>
  );
}

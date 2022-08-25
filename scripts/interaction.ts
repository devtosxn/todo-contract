import { ethers } from "hardhat";


const main = async () => {
  const Todo = await ethers.getContractFactory("Todo");
    const todo = Todo.attach("0x2cF7e430AC2Ac5557bd4caD22304282DEf84d580");

    const createTodo = await todo.createTodoItem("Coding", "Deploy 5 different smart contracts to the Goerli testnet");
    const createTodoTxnReciept = await createTodo.wait();
    console.log("Create First Todo: ", createTodoTxnReciept);

    const createTodoII = await todo.createTodoItem("Interacting", "Interact with the 5 different smart contracts deployed");
    const createTodoIITxnReciept = await createTodoII.wait();
    console.log("Create Second Todo: ", createTodoIITxnReciept);

    const allTodos = await todo.getTodoItems();
    console.log("All todos: ", allTodos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

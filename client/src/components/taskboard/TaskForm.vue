<template>
  <tr>
    <td>
      <input type="text" name="taskname">
    </td>
    <td>
      <select>
        <option name="status" value="fresh">Fresh</option>
        <option name="status" value="in progress">In progress</option>
        <option name="status" value="done">Done</option>
      </select>
    </td>
    <td>
      <select>
        <option name="priority" value="low">Low</option>
        <option name="priority" value="medium">Medium</option>
        <option name="priority" value="high">High</option>
      </select>
    </td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: "TaskForm"
};
</script>


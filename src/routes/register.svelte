<script lang="ts">
    let username;
    let email;
    let password;
</script>

<form action="/register" method="POST">
    <label for="username">
        Name:
        <input type="text" name="username" />
    </label>
    <label for="email">
        Email:
        <input type="email" name="email" />
    </label>
    <label for="password">
        Password:
        <input type="password" name="password" />
    </label>
    <input type="submit" value="Register">
</form>

<style>
    label {
        display: block;
        margin-bottom: 20px;
    }
</style>
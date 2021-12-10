<script lang="ts">
    let username;
    let email;
    let password;

    const submit = async () => {
        const post = await fetch("http://localhost:4000/auth/register", {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
            })
        });

        const data = await post.json();
    }
</script>

<form on:submit|preventDefault={submit}>
    <label for="username">
        Name:
        <input type="text" name="username" bind:value={username} />
    </label>
    <label for="email">
        Email:
        <input type="email" name="email" bind:value={email} />
    </label>
    <label for="password">
        Password:
        <input type="password" name="password" bind:value={password}/>
    </label>
    <input type="submit" value="Register">
</form>

<style>
    label {
        display: block;
        margin-bottom: 20px;
    }
</style>
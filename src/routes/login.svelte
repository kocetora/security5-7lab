<script lang="ts">
    let email;
    let password;

    const submit = async () => {
        const post = await fetch("http://localhost:4000/auth/login", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await post.json();
        console.log(data);
    }
</script>

<form on:submit|preventDefault={submit}>
    <label for="email">
        Email:
        <input type="email" name="email" bind:value={email} required/>
    </label>
    <label for="password">
        Password:
        <input type="password" name="password" bind:value={password} required/>
    </label>
    <input type="submit" value="Login">
</form>

<style>
    label {
        display: block;
        margin-bottom: 20px;
    }
</style>
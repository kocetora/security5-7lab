<script lang="ts">
    let address;
    let email;
    let password;

    const submit = async () => {
        const post = await fetch("http://localhost:4000/auth/register", {
            method: 'POST',
            body: JSON.stringify({
                address,
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
    <label for="address">
        Address:
        <input type="text" name="address" bind:value={address} required/>
    </label>
    <label for="password">
        Password:
        <input type="password" name="password" bind:value={password} required/>
    </label>
    <input type="submit" value="Register">
</form>

<style>
    label {
        display: block;
        margin-bottom: 20px;
    }
</style>
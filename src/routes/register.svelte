<script lang="ts">
let address;
let email;
let password;
let data;
let error;
const submit = async () => {
    const post = await fetch("http://localhost:4000/auth/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address,
            email,
            password,
        })
    });
    if (post.ok) {
        data = await post.json();
        error = undefined;
    } else {
        error = await post.text();
        data = undefined;
    }
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

{#if data}
    {#each Object.entries(data) as [title, paragraph]}
        <h1>{title}</h1>
        <p>{paragraph}</p>
    {/each}
{/if}

{#if error}
    <h1 class="error">{error}</h1>
{/if}

<style>
    label {
        display: block;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 20pt;
    }
    p {
        margin: 0 auto;
        font-size: 15pt;
    }
    .error {
        color: red;
    }
</style>
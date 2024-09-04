<template>
    <div class="flex flex-col items-center gap-y-4">
        <form class=" max-w-md w-full px-5 py-8 bg-slate-800 rounded-lg" @submit.prevent="onSubmit">
            <div class="grid grid-cols-1 gap-4">
                <input v-model="email" class="input" type="email" label="Email" placeholder="Email" />
                <input v-model="password" class="input" type="password" label="Password" placeholder="Password" />
                <button type="submit" class="px-4 py-2 bg-cyan-500 text-slate-800">Login</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const router = useRouter();
const { login } = useDirectusAuth();
  
const email = ref("");
const password = ref("");

const onSubmit = async () => {
	try {
		await login({ email: email.value, password: password.value });
        router.push("/");
    } catch (e) {
        alert("Invalid email or password");
    }
};
</script>
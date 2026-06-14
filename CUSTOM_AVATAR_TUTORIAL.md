# How to Add Custom Avatars / Trainer Sprites

This guide explains how to add custom trainer sprites (avatars) for users on your Pokémon Showdown server.

---

## Prerequisites
1. The client must be configured with your custom server details in `play.pokemonshowdown.com/config/config.js`.
2. The client must have `registered: true` in its `Config.defaultserver` configuration (this is set by default).

---

## Step-by-Step Instructions

### Step 1: Save the Sprite File
Place the custom trainer sprite image (format: `.png` or `.jpg`) into the Showdown server's local avatar directory:

* **Directory Path:** `config/avatars/`
* **Example:** `config/avatars/coolavatar.png`

---

### Step 2: Assign the Avatar to the User
You can assign the avatar to a user in one of two ways:

#### Option A: Via Chat Command (Easiest)
Log in to the server as an administrator (or a user with `bypassall` permissions) and run the following command in any chat room:
```text
/personalavatar [username], [filename]
```
**Example:**
```text
/personalavatar generalnewb, coolavatar.png
```

#### Option B: Directly Editing config/avatars.json
Open `config/avatars.json` on the server and add the user mapping manually:
```json
{
	"username": {
		"allowed": [
			"coolavatar.png"
		]
	}
}
```
*(Make sure the username is all lowercase and alphanumeric with no spaces.)*

---

### Step 3: Restart the Server
Restart the Pokémon Showdown server process. This is necessary because the server loads the custom avatar mappings from `config/avatars.json` into memory only during startup.

---

## How It Works Under the Hood
1. When a user logs in, the server matches their username against `config/avatars.json` and sets their active avatar to `coolavatar.png`.
2. When the user starts a battle, the server sends their avatar name (`coolavatar.png`) to the battle room log.
3. The client resolves the avatar URL by calling `Dex.resolveAvatar("coolavatar.png")`. Because the filename contains a `.`, the client constructs the custom server path:
   `https://<your-server-host>/avatars/coolavatar.png`
4. The server intercepts requests to `/avatars/*` and serves the static files from `config/avatars/` directly.
5. In battle, the client scales the avatar using `background-size: contain;` to ensure high-resolution images fit the trainer sprite containers correctly.

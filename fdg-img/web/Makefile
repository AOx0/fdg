all:
	cd ../ && wasm-pack build --features=wasm --target web --out-name fdg-img --out-dir pkg/ && cd web/

serve: all
	python3 -m http.server
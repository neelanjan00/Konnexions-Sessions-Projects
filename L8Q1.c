#include <stdio.h>
#include <stdlib.h>

struct node{
	int info;
	struct node* link;
};

struct node* push_linkedstack(struct node* Top, int element){
	struct node *p = (struct node*) malloc(sizeof(struct node));
	p->info = element;
	p->link = Top;
	Top = p;
	printf("%d element Pushed!\n", Top->info);
	return Top;
}

struct node* pop_linkedstack(struct node *Top){
	if(!Top){
		printf("Stack Underflow!\n");
		return Top;
	}
	int y;
	struct node *p = Top;
	y = Top -> info;
	Top = Top -> link;
	free(p);
	printf("%d element Popped!\n", y);
	return Top;
}

void display_linkedstack(struct node *Top){
	struct node *p = Top;
	printf("\n");
	while(p){
		printf("%d ", p->info);
		p = p->link;
	}
	printf("\n");
}

int main(){
	int choice, ele, flag = 0;
	struct node *Top = NULL;
	
	do{
		printf("1. Push\n2. Pop\n3. Display\nEnter Choice: ");
		scanf("%d", &choice);
		switch(choice){
			case 1: printf("Enter element to be pushed: ");
					scanf("%d", &ele);
					Top = push_linkedstack(Top, ele);
					break;
			case 2: Top = pop_linkedstack(Top);
					break;
			case 3: display_linkedstack(Top);
					break;
			default: printf("Wrong Input!\n");
		}
		printf("Want to enter again?\n0. Yes   1. No\nEnter choice: ");
		scanf("%d", &flag);
	} while(flag == 0);

	return 0;
}